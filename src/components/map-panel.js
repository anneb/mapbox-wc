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
            div {
                width: 300px;
                transition: width 0.5s ease;
                min-height: 55px;
                pointer-events: auto;
                overflow: hidden;
            }
            .hidden {
                width: 0px;
            }
            .bordered {
                background-color: rgba(192,192,192,0.5);
                width: 100%;
                height: 100%;
                padding: 5px;
                overflow: auto;
            }
            ::slotted(*) {
                background-color: white;
            }
        `
    }
    constructor () {
        super();
        this.active = false;
    }
    render() {
        return html`
            <div class="container${this.active?'':' hidden'}"><div class="bordered"><slot></slot></div></div>
        `
    }
}

window.customElements.define('map-panel', MapPanel);