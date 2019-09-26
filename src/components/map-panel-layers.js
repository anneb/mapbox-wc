import {LitElement, css, html} from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
export class MapPanelLayers extends LitElement {
    static get properties() {
        return {
            currentTool: {type: String, attribute: "currenttool"}
        }
    }
    static get styles() {
        return css`
            :host {
                display: block;
            }
        `
    }
    constructor () {
        super();
        this.currentTool = "";
    }
    render() {
        if (this.currentTool !== 'MAP-TOOL-LAYERS') {
            return html``;
        }
        return html`
            <div class="layerlist">Layers<ul><li>Layer1</li><li>Layer2</li><li>layer3</li><li>layer4</li></ul></div>
        `
    }
}

window.customElements.define('map-panel-layers', MapPanelLayers);
