import {LitElement, css, html} from 'lit-element';
import "./mapbox-wc.js";
import "./map-tool-container.js";
import "./map-tool-bar.js";
import "./map-tool-search.js";
import "./map-tool-layers.js";
import "./map-tool-measure.js";
import "./map-tool-info.js";


class MapboxWCApp extends LitElement {
    render() {
        return html`
            <mapbox-wc configUrl="./config/basic.json"></mapbox-wc>
            <map-tool-container position="top-left">
                <map-tool-bar @click="${e=>this._toolClicked(e)}">
                    <map-tool-search></map-tool-search>
                    <map-tool-layers></map-tool-layers>
                    <map-tool-measure></map-tool-measure>
                    <map-tool-info></map-tool-info>
                </map-tool-bar>
            </map-tool-container>
        `
    }
    _toolClicked(e) {
        const tools = this.shadowRoot.querySelector('map-tool-bar').children;
        for (let tool of tools) {
            if (tool.tagName === e.target.tagName) {
                tool.setAttribute('active', "true");
            } else {
                tool.removeAttribute('active');
            }
        }
    }
}

window.customElements.define('mapbox-wc-app', MapboxWCApp);