import {LitElement, css, html} from 'lit-element';
import './map-iconbutton.js';

export class MapTool extends LitElement {
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
        `
    }
    constructor () {
        super();
        this.active = false;
    }
}
