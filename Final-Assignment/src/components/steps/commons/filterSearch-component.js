import { LitElement, html, css } from 'lit';
import './capsule-component';
export class FilterSearch extends LitElement {
  static get styles() {
    return css`
      .filter-container {
        margin-top: 20px;
      }

      .tag-container {
        border: 2px solid #ccc;
        border-radius: 3px;
        background: #fff;
        display: flex;

        align-content: flex-start;
        padding: 6px;
      }
      .tag-container input {
        padding: 5px;
        font-size: 16px;
        border: 0;
        width: 100%;
        outline: none;
      }
      #menu {
        display: none;
      }
      .add-item {
        display: flex;
      }
      .add-item span {
        margin-left: 10px;
      }
      capsule-component {
        margin-right: 6px;
      }
    `;
  }
  static get properties() {
    return {
      searchKeyWord: { type: String },
      filterableList: { type: Array },
      tagElements: { type: Array },
    };
  }
  constructor() {
    super();

    this.listElements = [];
    this.tagElements = [];
    this.filterableList = [];
    this.searchKeyWord = '';
  }
  render() {
    this.listElements = [];

    this.filterableList.forEach((req, index) => {
      if (req.id.indexOf(this.searchKeyWord) === -1) {
        return;
      }
      this.listElements.push(
        html`<mwc-list-item @click=${() => this.renderselectedTag(index)}
          >${req.id}</mwc-list-item
        >`
      );
    });
    return html`
      <div class="filter-container">
        <div class="tag-container">
          ${this.tagElements}
          <input
            class="filter-input"
            @click=${() => {
              let menu = this.shadowRoot.getElementById('menu');
              menu.style.display = 'block';
            }}
            @input=${(e) => {
              this.searchKeyWord = e.target.value;
            }}
          />
        </div>
      </div>
      <mwc-list activatable id="menu"> ${this.checkFilterableList()}</mwc-list>
    `;
  }
  checkFilterableList() {
    if (this.listElements.length === 0) {
      return html`
       <mwc-list-item
       @click = ${() => console.log('Asd')}
 
          >
          <div class = "add-item">

          <img src="../../images/icons/addIcon.svg" alt="Add Icon" />
          <span> Add </span></mwc-list-item
        >
          </div>
         </mwc-list
      >
      `;
    }

    return this.listElements;
  }
  renderselectedTag(index) {
    const element = this.filterableList[index].id;

    this.tagElements = [
      ...this.tagElements,
      html` <capsule-component .tag=${element}></capsule-component>`,
    ];
    const inputField = this.shadowRoot.querySelector('.filter-input');
    inputField.value = '';
  }
  deleteTag(index) {}
}
customElements.define('filter-component', FilterSearch);
