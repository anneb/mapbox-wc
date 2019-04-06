import {LitElement, html} from 'lit-element';

class SimpleDiv extends LitElement {
    render() {
        return html`
            <div>Hallo</div>
        `
    }
}

window.customElements.define('simple-div', SimpleDiv);