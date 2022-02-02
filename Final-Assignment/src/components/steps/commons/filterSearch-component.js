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
        overflow: scroll;
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
      /**
       * @type {String}
       * Stores the keyword used for filtering an element
       */
      searchKeyWord: { type: String },
      /**
       * @type {Array}
       * Retrieved as props
       * stores the list that can be filtered (might include requirements or security roles)
       */
      filterableList: { type: Array },
      /**
       * @type {Array}
       * stores the html elements used as capsules
       */
      tagElements: { type: Array },
      /**
       * @type {Function}
       * Retrieved as props
       * used to store the selected items to the local storage and the main list
       */
      saveSelectedItems: { type: Function },

      /**
       * @type {Array}
       * Retrieved as props
       * Stores the selected items
       */

      selectedListItems: { type: Array },
      /**
       * @type {String}
       * Retrieved as props
       * stores the name for the input field which is passed as a props
       * Makes the component dynamic and reusable for any text field
       */
      inputFieldName: { type: String },
    };
  }
  constructor() {
    super();

    this.listElements = [];
    this.tagElements = [];
    this.filterableList = [];
    this.selectedListItems = [];
    this.searchKeyWord = '';
    this.inputFieldName = '';
  }
  render() {
    this.listElements = [];
    this.tagElements = [];

    if (this.filterableList) {
      this.filterableList.forEach((req, index) => {
        if (req.indexOf(this.searchKeyWord) === -1) {
          return;
        }

        this.listElements.push(
          html`<mwc-list-item @click=${() => this.renderselectedTag(index)}
            >${req}</mwc-list-item
          >`
        );
      });
    }
    if (this.selectedListItems) {
      this.selectedListItems.forEach((item) => {
        this.tagElements.push(
          html` <capsule-component .tag=${item}></capsule-component>`
        );
      });
    }

    return html`
      <div class="filter-container">
        <div class="tag-container">
          ${this.tagElements}
          <input
            class="filter-input"
            name=${this.inputFieldName}
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
  /**
   *
   * @returns {void}
   *
   */
  checkFilterableList() {
    if (this.listElements.length === 0) {
      return html`
       <mwc-list-item
       @click = ${(e) => {
         const inputField = this.shadowRoot.querySelector('.filter-input');

         this.saveSelectedItems(inputField.value, inputField.name);
       }}
 
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
    const element = this.filterableList[index];
    this.tagElements.push(
      html` <capsule-component .tag=${element}></capsule-component>`
    );
    this.tagElements = [...this.tagElements];

    const inputField = this.shadowRoot.querySelector('.filter-input');
    inputField.value = '';
  }
  deleteTag(index) {}
}
customElements.define('filter-component', FilterSearch);
