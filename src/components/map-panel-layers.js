import {LitElement, css, html} from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
export class MapPanelLayers extends LitElement {
    static get properties() {
        return {
            currentTool: {type: String}
        }
    }
    static get styles() {
        return css`
            :host {
                display: block;
            }
            div {
                width: 100%;
                height: auto;
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
            <div>Layers<ul><li>Layer1</li><li>Layer2</li></ul></div>
        `
    }
}

window.customElements.define('map-panel-layers', MapPanelLayers);
