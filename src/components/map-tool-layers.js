import {LitElement, css, html} from 'lit-element';
import {toolLayersIcon} from '../resources/map-icons';

class MapToolLayers extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                
            }
        `
    }
    render() {
        return html`
            <map-iconbutton .icon='${toolLayersIcon}'></map-iconbutton>
        `
    }
}

window.customElements.define('map-tool-layers', MapToolLayers);