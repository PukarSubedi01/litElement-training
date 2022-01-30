import { LitElement, html, css } from 'lit';

export class StepsList extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      stepsList: [],
      selectStep: { type: Function },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <mwc-list activatable>
        ${this.stepsList.map((step, index) => {
          return html`<mwc-list-item @click=${() => this.selectStep(index)}
            >${step.step}</mwc-list-item
          >`;
        })}
      </mwc-list>
    `;
  }
}

customElements.define('list-component', StepsList);
