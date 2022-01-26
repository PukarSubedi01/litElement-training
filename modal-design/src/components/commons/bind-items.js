import { LitElement, html, css } from 'lit';

import '@polymer/paper-checkbox/paper-checkbox';

export class BindingGroupItem extends LitElement {
  static get styles() {
    return css`
      paper-checkbox.blue {
        --paper-checkbox-checked-color: #304ffe;
        --paper-checkbox-unchecked-color: #9faab7;
      }

      paper-checkbox {
        padding: 10px 8px;
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
    return html`
      <div class="item">
        <paper-checkbox class="blue">
          <span class="title">${this.getAttribute('text')}</span>
        </paper-checkbox>
      </div>
    `;
  }
}

customElements.define('bind-items', BindingGroupItem);
