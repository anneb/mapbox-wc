import {LitElement, css, html} from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
export class MapPanelMeasure extends LitElement {
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
        if (this.currentTool !== 'MAP-TOOL-MEASURE') {
            return html``;
        }
        return html`
            <div>measure</div>
        `
    }
}

window.customElements.define('map-panel-measure', MapPanelMeasure);
