import { LitElement, html, css } from 'lit';
import './table-category';
import './items-component';
import './table-category';
export class TableComponent extends LitElement {
  static get styles() {
    return css`
      .table-head {
        display: flex;
      }
      .table-head .column {
        width: 150px;

        font-weight: bold;
        font-size: 20px;
      }
    `;
  }

  static get properties() {
    return {
      tableData: { type: [] },
      searchKeyWord: {
        type: String,
      },
      inStock: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.tableData = [];
    this.row = [];
    this.searchKeyWord = '';
  }

  render() {
    let lastCategory = null;

    this.row = [];
    this.tableData.forEach((product) => {
      if (product.name.indexOf(this.searchKeyWord) === -1) {
        return;
      }
      if (this.inStock && !product.stocked) {
        return;
      }

      if (product.category != lastCategory) {
        lastCategory = product.category;
        this.row.push(html`<category-component
          .category=${product.category}
        ></category-component>`);
      }

      this.row.push(html` <items-component
        .products=${product}
      ></items-component>`);
    });
    return html`
      <div class="table">
        <div class="table-head">
          <div class="column">Name</div>
          <div class="column">Price</div>
        </div>
        <div class="table-body">${this.row}</div>
      </div>
    `;
  }
}

customElements.define('table-component', TableComponent);
