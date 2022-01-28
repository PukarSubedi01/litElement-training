import { LitElement, html, css } from 'lit';
import './list-component';
import './form-component';
export class StepsContent extends LitElement {
  static get styles() {
    return css`
      form-component {
        display: flex;
        flex-direction: column;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`<list-component></list-component>
      <form-component></form-component> `;
  }
}

customElements.define('content-component', StepsContent);
