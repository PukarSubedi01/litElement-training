import { LitElement, html, css } from 'lit';
import './list-component';
import './form-component';
export class StepsContent extends LitElement {
  static get styles() {
    return css`
      form-component {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        width: 60%;
      }
      list-component {
        width: 40%;
      }
    `;
  }

  static get properties() {
    return {
      saveOnPause: { type: Function },
      stepsList: [],
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`<list-component .stepsList=${this.stepsList}></list-component>
      <form-component .saveOnPause=${this.saveOnPause}></form-component> `;
  }
}

customElements.define('content-component', StepsContent);
