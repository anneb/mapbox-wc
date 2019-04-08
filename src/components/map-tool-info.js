import {MapTool} from './map-tool.js';
import {html} from 'lit-element';
import {toolInfoIcon} from '../resources/map-icons.js';
import './map-iconbutton.js';

class MapToolInfo extends MapTool {
   render() {
        return html`
            <map-iconbutton .icon='${toolInfoIcon}' ?active="${this.active}"></map-iconbutton>
        `
    }
}

window.customElements.define('map-tool-info', MapToolInfo);