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
                max-width: 375px;
                left: 10px;
                top: 10px;
                pointer-events: none;
                background-color: white;
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