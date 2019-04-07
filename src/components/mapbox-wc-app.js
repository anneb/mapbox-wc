import {LitElement, css, html} from 'lit-element';
import "./mapbox-wc.js";
import "./map-tool-container.js";
import "./map-tool-bar.js";
import "./map-tool-search.js";
import "./map-tool-layers.js";
import "./map-tool-measure.js";
import "./map-tool-info.js";
import "./simple-div.js";

class MapboxWCApp extends LitElement {
    static get styles() {
        return css`
        `
    }
    render() {
        return html`
            <mapbox-wc configUrl="./config/basic.json"></mapbox-wc>
            <map-tool-container position="top-left">
                <map-tool-bar>
                    <map-tool-search></map-tool-search>
                    <map-tool-layers></map-tool-layers>
                    <map-tool-measure></map-tool-measure>
                    <map-tool-info></map-tool-info>
                </map-tool-bar>
            </map-tool-container>
        `
    }
}

window.customElements.define('mapbox-wc-app', MapboxWCApp);