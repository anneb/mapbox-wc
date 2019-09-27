import {LitElement, css, html} from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
class MapToolBar extends LitElement {
    static get styles() {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                box-shadow: rgba(204,204,204,0.5) 1px 0px 1px 1px;
                pointer-events: auto;
                max-height: 80vh;
            }
        `
    }
    render() {
        return html`
            <slot><slot>
        `
    }
}

window.customElements.define('map-tool-bar', MapToolBar);