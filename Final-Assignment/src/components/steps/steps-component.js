import { LitElement, html, css } from 'lit';
import './commons/steps-header';

export class StepComponent extends LitElement {
  static get styles() {
    return css`
      steps-header {
        display: flex;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html` <steps-header></steps-header> `;
  }
}

customElements.define('steps-component', StepComponent);
