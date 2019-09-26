import {LitElement, css, html} from 'lit-element';
import "./mapbox-wc.js";
import "./map-tool-container.js";
import "./map-tool-bar.js";
import "./map-tool-search.js";
import "./map-tool-layers.js";
import "./map-tool-measure.js";
import "./map-tool-info.js";
import "./map-panel.js";
import "./map-panel-info.js";
import "./map-panel-search.js";
import "./map-panel-layers.js";
import "./map-panel-measure.js";

/**
* @polymer
* @extends HTMLElement
*/
class MapboxWCApp extends LitElement {
    render() {
        return html`
            <mapbox-wc configUrl="./config/basic.json"></mapbox-wc>
            <map-tool-container position="top-left">
                <map-tool-bar @click="${e=>this._toggleTool(e)}">
                    <map-tool-search></map-tool-search>
                    <map-tool-layers></map-tool-layers>
                    <map-tool-measure></map-tool-measure>
                    <map-tool-info></map-tool-info>
                </map-tool-bar>
                <map-panel>
                    <map-panel-search></map-panel-search>
                    <map-panel-layers></map-panel-layers>
                    <map-panel-measure></map-panel-measure>
                    <map-panel-info></map-panel-info>
                </map-panel>
            </map-tool-container>
        `
    }
    _toggleTool(e) {
        const tools = this.shadowRoot.querySelector('map-tool-bar');
        for (let tool of tools.children) {
            if (tool.tagName === e.target.tagName) {
                let toolActive = tool.toggleAttribute('active');
                let mapPanel = this.shadowRoot.querySelector('map-panel');
                let currentTool = toolActive ? tool.tagName : "";
                for (let panel of mapPanel.children) {
                    panel.setAttribute('currentTool', currentTool);
                }
                if (toolActive) {
                    mapPanel.setAttribute('active', '');
                } else {
                    mapPanel.removeAttribute('active');
                }
            } else {
                tool.removeAttribute('active');
            }
        }
    }
}

window.customElements.define('mapbox-wc-app', MapboxWCApp);