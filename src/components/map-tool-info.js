import {LitElement, css, html} from 'lit-element';
import {toolInfoIcon} from '../resources/map-icons.js';
import './map-iconbutton.js';

class MapToolInfo extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                
            }
        `
    }
    render() {
        return html`
            <map-iconbutton .icon='${toolInfoIcon}'></map-iconbutton>
        `
    }
}

window.customElements.define('map-tool-info', MapToolInfo);