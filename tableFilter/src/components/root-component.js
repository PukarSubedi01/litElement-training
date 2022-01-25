import { LitElement, html, css } from 'lit';
import './commons/input-component';
import './commons/table/table-component';
import { PRODUCTS } from '../constants/constants';

export class RootComponent extends LitElement {
  static get styles() {
    return css`
      .wrapper {
        display: flex;
        flex-direction: column;

        width: 30%;

        align-items: center;
        margin: 0 auto;
      }
    `;
  }

  static get properties() {
    return {
      searchKeyword: { type: String },
      inStock: { type: Boolean },
      handleValueChange: { type: Function },
      handleCheckboxStatus: { type: Function },
    };
  }

  constructor() {
    super();
    this.searchKeyword = '';
    this.inStock = false;
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleCheckboxStatus = this.handleCheckboxStatus.bind(this);
  }

  render() {
    return html`
      <div class="wrapper">
        <input-component
          .searchKeyWord=${this.searchKeyword}
          .inStock=${this.inStock}
          .listenValueChange=${this.handleValueChange}
          .listenCheckboxStatus=${this.handleCheckboxStatus}
        ></input-component>
        <table-component
          .tableData=${PRODUCTS}
          .searchKeyWord=${this.searchKeyword}
          .inStock=${this.inStock}
        ></table-component>
      </div>
    `;
  }

  handleValueChange(e) {
    this.searchKeyword = e.target.value;
  }
  handleCheckboxStatus(e) {
    this.inStock = e.target.checked;
  }
}

customElements.define('root-component', RootComponent);
