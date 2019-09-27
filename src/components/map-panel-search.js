import {LitElement, css, html} from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
export class MapPanelSearch extends LitElement {
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
            .search {
                width: 100%;
                height: 200px;
                background-color: red;
            }
            
        `
    }
    constructor () {
        super();
        this.currentTool = "";
    }
    render() {
        if (this.currentTool !== 'search') {
            return html``;
        }
        return html`
            <div class="search">Search!</div>
        `
    }
}

window.customElements.define('map-panel-search', MapPanelSearch);
