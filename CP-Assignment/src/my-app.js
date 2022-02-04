import { LitElement, html, css } from 'lit';

import './components/main-component';

export class MyApp extends LitElement {
  /**
   * Gets style.
   *
   * @returns {Array}
   */
  static get styles() {
    return [css``];
  }
  render() {
    return html`<main><main-component></main-component></main>`;
  }
}

customElements.define('my-app', MyApp);
