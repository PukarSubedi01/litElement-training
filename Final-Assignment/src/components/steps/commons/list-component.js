import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';
export class StepsList extends LitElement {
  static get styles() {
    return css`
      .draggable {
        padding: 20px;
        font-size: 20px;
        font-weight: bold;
      }
      .draggable:hover {
        cursor: pointer;
      }
      .active {
        background: #ece8ff;
        color: #9355fe;
      }
    `;
  }

  static get properties() {
    return {
      stepsList: [],
      selectStep: { type: Function },
      swapListItems: { type: Function },
    };
  }

  constructor() {
    super();
    this.listElements = [];
    this.swapIndexes = {
      previousIndex: 0,
      newIndex: 0,
    };
  }

  render() {
    this.listElements = [];
    this.stepsList.forEach((step, index) => {
      this.listElements.push(html`
        <li
          class="draggable"
          draggable=${true}
          @click=${() => this.selectStep(index)}
          @dragover=${(e) => e.preventDefault()}
          @dragstart=${() => (this.swapIndexes.previousIndex = index)}
          @drop=${() => {
            this.swapIndexes.newIndex = index;
            this.swapListItems(this.swapIndexes);
          }}
        >
          ${step.step}
        </li>
      `);
    });

    return html` <mwc-list activatable> ${this.listElements} </mwc-list> `;
  }
  toggleActiveClass() {}
}

customElements.define('list-component', StepsList);
