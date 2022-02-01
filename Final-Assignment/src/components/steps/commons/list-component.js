import { LitElement, html, css } from 'lit';

export class StepsList extends LitElement {
  static get styles() {
    return css``;
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
        <p
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
        </p>
      `);
    });

    return html` <mwc-list activatable> ${this.listElements} </mwc-list> `;
  }
}

customElements.define('list-component', StepsList);
