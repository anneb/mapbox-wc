import {LitElement, html, css} from 'lit-element';
import {apiKeys} from '../keys.js';
import {mergeDeep} from '../utils/mergedeep.js';
import {getCheckedLayers} from '../utils/treelist.js';
import {timeout} from '../utils/misc.js';

/**
* @polymer
* @extends HTMLElement
*/
class MapboxWC extends LitElement {
  static get properties() {
    return {
      configUrl: {type: String}
    }
  }
  static get styles() {
    return css`
      #map {
        width: 100%;
        height: 100%;
      }
    `
  }
  constructor() {
    super();
    this.configUrl = null;
    this._applyConfig({});
  }
  render() {
    return html`
      <link href="${document.baseURI}node_modules/mapbox-gl/dist/mapbox-gl.css" rel="stylesheet">
      <div id="map"></map>
    `
  }
  firstUpdated() {
    const mapcontainer = this.shadowRoot.querySelector('#map');
    mapcontainer.addEventListener('dragover', (e) => {
      e.preventDefault()
    });
    mapcontainer.addEventListener('drop', (ev) => this._handleDrop(ev));
    if (this.configUrl) {
      this._loadConfig(this.configUrl);
    } else {
      this._initMap();
    }
  }
  async _addCheckedLayers() {
    for (let layer of this.activeLayers) {
      this._addLayer(layer);
      while (!this.map.loaded()) {
        await timeout(50)
      }
    }
  }
  _addLayer(layer) {
    switch(layer.type) {
      case "fill":
      case "point":
      case "line":
      case "circle":
      case "raster":
      case "hillshade":
        this.map.addLayer(layer);
        break;
    }
  }
  _applyConfig(newConfig) {
      const config = mergeDeep(MapboxWC._baseConfig(), newConfig);
      this.accesstoken = config.keys.mapbox;
      this.lon = config.map.center[0];
      this.lat = config.map.center[1];
      this.zoom = config.map.zoom;
      this.pitch = config.map.pitch;
      this.mapstyle = config.style;
      this.activeLayers = getCheckedLayers(config.datacatalog);
    }
  static _baseConfig() {
    return {
      "map": {
        "zoom": 1,
        "center": [0, 0],
        "pitch": 0,
        "bearing": 0
      },
      "datacatalog": [
        {
          "id": "worlddefaultmap",
          "metadata": {
            "checked": 1,
            "type": "reference",
            "title": "World Countries"
          },
          "type": "fill",
          "source": {
            "type": "geojson",
            "data": "data/countries.geojson",
            "attribution": "<a href=\"https://www.naturalearthdata.com/\" target=\"attribution\">Natural Earth</a>"
          },
          "paint": {
            "fill-color": "green",
            "fill-opacity": 0.4,
            "fill-outline-color": "#444"
          }
        }
      ],
      "style": {
        "version": 8,
        "name": "DefaultBaseStyle",
        "id": "defaultbasestyle",
        "glyphs": `https://free.tilehosting.com/fonts/{fontstack}/{range}.pbf?key=${apiKeys.freetilehosting}`,
        "sources": {
        },
        "layers": [
        ]
      },
      "tools": {
      },
      "keys": apiKeys
    }
  }
  _disableRightMouseDragRotate()
  {
    const onMouseDown = this.map.dragRotate.onMouseDown;
    this.map.dragRotate.onMouseDown = function (e) {
      if (e.button === 2) {
        // right mouse button clicked
        event = new MouseEvent({button: 2, ctrlKey:true});
        onMouseDown(event);
      } else {
        onMouseDown(e);
      }
    }
  }
  _handleDrop() {

  }
  _initMap() {
    if (!window.mapboxgl) {
      console.error('window.mapboxgl not available\nload script node_modules/mapbox-gl/dist/mapbox-gl.js globally');
      return;
    }
    if (this.accesstoken) {
      window.mapboxgl.accessToken = this.accesstoken;
    }
    if (this.map) {
      this.map.remove();
    }
    this.map = new window.mapboxgl.Map({
        container: this.shadowRoot.querySelector('#map'), 
        style: this.mapstyle,
        center: [this.lon,this.lat],
        zoom: this.zoom,
        pitch: this.pitch
    });
    this.map.on('load', ()=>{
      this._addCheckedLayers();   
      this._disableRightMouseDragRotate();
    });
  }
  async _loadConfig(configUrl) {
    if (configUrl && configUrl !== '') {
      try {
        const response = await fetch(configUrl);
        if (response.status >= 200 && response.status < 300) {
          const config = await response.json()
          this._applyConfig(config);
          this._initMap();
        } else {
          throw (new Error(`status: ${response.statusText || response.status}`));
        }
      } catch (error) {
        console.error(`Error loading config:\n${configUrl}\n${error}`);
      }
    }
  }
}

  window.customElements.define('mapbox-wc', MapboxWC);