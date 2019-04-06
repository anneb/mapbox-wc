import {LitElement, css, html} from 'lit-element';
import "./mapbox-wc.js";
import "./simple-div";

class MapboxWCApp extends LitElement {
    static get styles() {
        return css`
            #hallo {
                position: absolute;
                display: inline-block;
                top: 20%;
                left: 0%;
                background-color: white;
                border: 1px solid red;
                pointer-events: auto;
                cursor: default;
            }
            #hallo:hover {
                background-color: gray;
            }
        `
    }
    render() {
        return html`
            <mapbox-wc configUrl="./config/basic.json"></mapbox-wc>
            <simple-div id="hallo">Hallo</simple-div>
        `
    }
}

window.customElements.define('mapbox-wc-app', MapboxWCApp);