import {LitElement, css, html, svg} from 'lit-element';
import "./mapbox-wc.js";
import "./map-tool-container.js";
import "./map-tool-bar.js";
import "./map-panel.js";
import "./map-panel-info.js";
import "./map-panel-search.js";
import "./map-panel-layers.js";
import "./map-panel-measure.js";
import "./map-tool-button.js";

import {toolSearchIcon, toolLayersIcon, toolMeasureIcon, toolInfoIcon} from '../resources/map-icons.js';

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
                    <map-tool-button label="Hallo"></map-tool-button>
                    <map-tool-button .icon="${toolSearchIcon}"}></map-tool-button>
                    <map-tool-button disabled label="disabled"></map-tool-button>
                    <map-tool-button title="search" .icon="${toolSearchIcon}"></map-tool-button>
                    <map-tool-button value="search" .icon="${toolSearchIcon}"></map-tool-button>
                    <map-tool-button value="layers" .icon="${toolLayersIcon}"></map-tool-button>
                    <map-tool-button value="measure" .icon="${toolMeasureIcon}"></map-tool-button>
                    <map-tool-button value="info" .icon="${toolInfoIcon}"></map-tool-button>
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
            if (tool === e.target) {
                let toolActive = tool.toggleAttribute('active');
                let mapPanel = this.shadowRoot.querySelector('map-panel');
                let currentTool = toolActive ? tool.value : "";
                for (let panel of mapPanel.children) {
                    panel.setAttribute('currenttool', currentTool);
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