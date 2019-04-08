import {MapTool} from './map-tool.js';
import {html} from 'lit-element';
import {toolLayersIcon} from '../resources/map-icons';

class MapToolLayers extends MapTool {
    render() {
        return html`
            <map-iconbutton .icon='${toolLayersIcon}' ?active="${this.active}"></map-iconbutton>
        `
    }
}

window.customElements.define('map-tool-layers', MapToolLayers);