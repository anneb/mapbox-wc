import {LitElement, css, html} from 'lit-element';


/**
* @polymer
* @extends HTMLElement
*/
export class MapPanel extends LitElement {
    static get properties() {
        return {
            active: {type: Boolean}
        }
    }
    static get styles() {
        return css`
            :host {
                display: block;
            }
            .container {
                display: flex;
                align-items: stretch;
                background-color: rgba(192,192,192,0.5);
                width: 300px;
                transition: width 0.5s ease, padding 0s ease;
                min-height: 55px;
                pointer-events: auto;
                padding: 5px;
                box-sizing: border-box;
                overflow: hidden;
            }
            .hidden {
                width: 0px;
                padding: 0;
                transition: width 0.5s ease, padding 0.5s ease-out;
            }
            .panelcontent {
                background-color: white;
                width: 100%;
            }
        `
    }
    constructor () {
        super();
        this.active = false;
    }
    render() {
        return html`
            <div class="container${this.active?'':' hidden'}"><div class="panelcontent"><slot></slot></div></div>
        `
    }
}

window.customElements.define('map-panel', MapPanel);