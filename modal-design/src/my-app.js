import { LitElement, html, css } from 'lit';
import './components/form-component';
export class MyApp extends LitElement {
  static get styles() {
    return [
      css`
        main {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          width: 40%;
          margin: 20px auto;
          border-radius: 2px;
          padding: 15px;
        }
      `,
    ];
  }
  render() {
    return html`<main><form-component></form-component></main>`;
  }
}

customElements.define('my-app', MyApp);
