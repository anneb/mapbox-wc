import {LitElement, css, html} from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
class MapToolBar extends LitElement {
    static get styles() {
        return css`
            :host {
                display: inline-block;
                box-shadow: rgba(204,204,204,0.5) 1px 0px 1px 1px;
                width: 55px;
                pointer-events: auto;
            }
            ::slotted(*) {
                    width: 54px;
                    height: 54px;
                    line-height: 67px;
                    border-bottom: 1px solid rgba(204,204,204,.52);
                    border-left: 1px solid rgba(204,204,204,.52);
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