import {LitElement, css, html} from 'lit-element';
import {toolSearchIcon} from '../resources/map-icons.js';
import './map-iconbutton.js';

class MapToolSearch extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                
            }
        `
    }
    render() {
        return html`
            <map-iconbutton .icon='${toolSearchIcon}'></map-iconbutton>
        `
    }
}

window.customElements.define('map-tool-search', MapToolSearch);