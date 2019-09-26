import {LitElement, css, html} from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
class MapToolContainer extends LitElement {
    static get styles() {
        return css`
            :host {
                position: absolute;
                display: flex;
                left: 10px;
                top: 10px;
                pointer-events: none;
                background-color: transparent;
            }
        `
    }
    render() {
        return html`
            <slot></slot>
        `
    }
}

window.customElements.define('map-tool-container', MapToolContainer);