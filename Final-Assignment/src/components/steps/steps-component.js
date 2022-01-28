import { LitElement, html, css } from 'lit';
import './commons/steps-header';
import './commons/content-component';
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
    return html`
      <steps-header></steps-header>
      <content-component></content-component>
    `;
  }
}

customElements.define('steps-component', StepComponent);
