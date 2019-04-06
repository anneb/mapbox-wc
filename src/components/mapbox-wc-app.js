import {LitElement, css, html} from 'lit-element';
import "./mapbox-wc.js";

class MapboxWCApp extends LitElement {
    render() {
        return html`
            <mapbox-wc configUrl="./config/basic.json"></mapbox-wc>
        `
    }
}

window.customElements.define('mapbox-wc-app', MapboxWCApp);