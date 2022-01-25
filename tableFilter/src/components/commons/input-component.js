import { LitElement, html, css } from 'lit';

export class InputComponent extends LitElement {
  static get styles() {
    return css`
      .checkbox {
        margin-top: 12px;
      }
    `;
  }

  static get properties() {
    return {
      searchKeyWord: {
        type: String,
      },
      inStock: { type: Boolean },
      listenValueChange: { type: Function },
      listenCheckboxStatus: { type: Function },
    };
  }

  constructor() {
    super();
    this.searchKeyWord = '';
    this.inStock = false;
  }

  render() {
    return html`
      <div class="input-field-wrapper">
        <div class="input-field">
          <input
            type="text"
            placeholder="Search.."
            value=${this.searchKeyWord}
            @keyup=${(e) => {
              this.listenValueChange(e);
            }}
          />
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            .checked=${this.inStock}
            @click=${(e) => {
              this.listenCheckboxStatus(e);
            }}
          /><label>Only show products in stock</label>
        </div>
      </div>
    `;
  }
}

customElements.define('input-component', InputComponent);
