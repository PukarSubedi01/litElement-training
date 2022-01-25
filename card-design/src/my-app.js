import { LitElement, html, css } from 'lit';

import './components/card-component';

export class MyApp extends LitElement {
  static get styles() {
    return [
      css`
        main {
          width: 90%;
          margin: 10px auto;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
      `,
    ];
  }
  render() {
    return html`<main><card-component></card-component></main>`;
  }
}

customElements.define('my-app', MyApp);
