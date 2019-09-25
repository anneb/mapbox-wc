import {LitElement, html} from 'lit-element';

/**
* @polymer
* @extends HTMLElement
*/
class SimpleDiv extends LitElement {
    render() {
        return html`
            <div>Hallo</div>
        `
    }
}

window.customElements.define('simple-div', SimpleDiv);