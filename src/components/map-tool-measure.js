import {LitElement, css, html} from 'lit-element';
import {toolMeasureIcon} from '../resources/map-icons';

class MapToolMeasure extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                
            }
        `
    }
    render() {
        return html`
            <map-iconbutton .icon='${toolMeasureIcon}'></map-iconbutton>
        `
    }
}

window.customElements.define('map-tool-measure', MapToolMeasure);