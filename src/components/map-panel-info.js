import {LitElement, css, html} from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
export class MapPanelInfo extends LitElement {
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
        if (this.currentTool !== 'info') {
            return html``;
        }
        return html`
            <div>INFO!</div>
        `
    }
}

window.customElements.define('map-panel-info', MapPanelInfo);
