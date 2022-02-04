import { LitElement, html, css } from 'lit';

export class MainComponent extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      name: { type: String },

      count: { type: Number },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html``;
  }
}

customElements.define('main-component', MainComponent);
