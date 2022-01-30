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
      selectStep: { type: Function },
      selectedStep: { type: Object },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`<list-component
        .stepsList=${this.stepsList}
        .selectStep=${this.selectStep}
      ></list-component>
      <form-component
        .saveOnPause=${this.saveOnPause}
        .selectedStep=${this.selectedStep}
      ></form-component> `;
  }
}

customElements.define('content-component', StepsContent);
