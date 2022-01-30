import { LitElement, html, css } from 'lit';

export class StepsList extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      stepsList: [],
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <mwc-list activatable>
        ${this.stepsList.map((step, index) => {
          return html`<mwc-list-item>${step.step}</mwc-list-item>`;
        })}
        <!-- <mwc-list-item>Item 0</mwc-list-item> -->
        <!-- <mwc-list-item selected activated>Item 1</mwc-list-item>
        <mwc-list-item>Item 2</mwc-list-item>
        <mwc-list-item>Item 3</mwc-list-item> -->
      </mwc-list>
    `;
  }
}

customElements.define('list-component', StepsList);
