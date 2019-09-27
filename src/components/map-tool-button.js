import {LitElement, css, html} from 'lit-element';
import {ifDefined} from 'lit-html/directives/if-defined';

/**
* @polymer
* @extends HTMLElement
*/
export class MapToolButton extends LitElement {
    static get properties() {
        return {
            active: {type: Boolean},
            disabled: {type: Boolean},
            name: {type: String},
            title: {type: String},
            value: {type: String},
            label: {type: String},
            icon: {type: Object}
        }
    }
    static get styles() {
        return css`
            :host {
                display: block;
            }
            button {
                padding: 0;
                border: none;
                font: inherit;
                color: inherit;
                background-color: transparent;
                cursor: pointer;
            }
            button {
                opacity: 0.9;
                display: inline-block;
                height: 54px;
                width: 54px;
                color: rgb(51,51,51);
                fill: rgb(51,51,51);
                box-sizing: border-box;
                background-color: white;
                text-align: center;
                user-select:none;
                border: 1px solid rgba(204,204,204,.52);
              }
              button:hover {
                background-color: gray;
                fill: white;
                color: white;
              }
              button[active] {
                background-color: rgb(204,0,0);
                fill: white;
                color: white;
              }
              button[active]:hover {
                background-color: rgb(160,0,0);
                fill: white;
                color: white;
              }
              button[disabled]:hover {
                background-color: white;
                color: rgb(160,160,160);
                fill: rgb(160,160,160);                
              }
              button[disabled] {
                background-color: white;
                fill: rgb(160,160,160);
                color: rgb(160,160,160);
                cursor: auto;
              }
        `
    }
    constructor () {
        super();
        this.active = false;
        this.name = undefined;
        this.title = undefined;
        this.value = null;
        this.label = "Button";
        this.icon = null;
    }
    render() {
      return html`
        <button ?active="${this.active}" title=${ifDefined(this.title)} ?disabled=${this.disabled} value="${ifDefined(this.value)}" name="${ifDefined(this.name)}">${this.icon?this.icon:this.label}</button>
      `
    }
}
window.customElements.define('map-tool-button', MapToolButton);