import { LitElement, html, css } from 'lit';

import { classMap } from 'lit-html/directives/class-map.js';

export class ItemsComponent extends LitElement {
  static get styles() {
    return css`
      .table-data {
        display: flex;
      }
      .data {
        width: 150px;
      }
      .notInStock {
        color: red;
      }
    `;
  }

  static get properties() {
    return {
      products: { type: {} },
    };
  }

  constructor() {
    super();
    // this.products = {};
  }

  render() {
    return html`
      <div class="table-data">
        <div class="data ${classMap({ notInStock: !this.products.stocked })}">
          ${this.products.name}
        </div>
        <div class="data">${this.products.price}</div>
      </div>
    `;
  }
}

customElements.define('items-component', ItemsComponent);
