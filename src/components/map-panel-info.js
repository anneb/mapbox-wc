import {LitElement, css, html} from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
export class MapPanelInfo extends LitElement {
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
        if (this.currentTool !== 'MAP-TOOL-INFO') {
            return html``;
        }
        return html`
            <div>INFO!</div>
        `
    }
}

window.customElements.define('map-panel-info', MapPanelInfo);
