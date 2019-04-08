import {MapTool} from './map-tool.js';
import {html} from 'lit-element';
import {toolSearchIcon} from '../resources/map-icons.js';
import './map-iconbutton.js';

class MapToolSearch extends MapTool {
    render() {
        return html`
            <map-iconbutton ?active="${this.active}"
                .icon='${toolSearchIcon}' 
            ></map-iconbutton>
        `
    }
}

window.customElements.define('map-tool-search', MapToolSearch);