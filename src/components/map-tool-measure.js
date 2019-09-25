import {MapTool} from './map-tool.js';
import {html} from 'lit-element';
import {toolMeasureIcon} from '../resources/map-icons';

/**
* @polymer
* @extends HTMLElement
*/
class MapToolMeasure extends MapTool {
    render() {
        return html`
            <map-iconbutton .icon='${toolMeasureIcon}' ?active="${this.active}"></map-iconbutton>
        `
    }
}

window.customElements.define('map-tool-measure', MapToolMeasure);