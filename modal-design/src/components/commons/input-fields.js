import { LitElement, html, css } from 'lit';

import '@polymer/paper-input/paper-input.js';

export class InputFields extends LitElement {
  static get styles() {
    return css`
      .input-row-wrapper {
        display: flex;
      }

      paper-input {
        width: 50%;
        padding-right: 10px;
      }
    `;
  }

  render() {
    return html`
      <div class="input-row-wrapper">
        <paper-input label="${this.getAttribute('leftField')}"></paper-input>
        <paper-input label="${this.getAttribute('rightField')}"></paper-input>
      </div>
    `;
  }
}

customElements.define('input-fields', InputFields);
