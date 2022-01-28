import { LitElement, html, css } from 'lit';

import './components/steps/steps-component';

export class MyApp extends LitElement {
  static get styles() {
    return [
      css`
        main {
          width: 90%;
          border-radius: 4px;
          margin: 0 auto;
          background: white;
        }
      `,
    ];
  }
  render() {
    return html`<main><steps-component></steps-component></main>`;
  }
}

customElements.define('my-app', MyApp);
