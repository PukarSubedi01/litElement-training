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
      swapListItems: { type: Function },
      saveSelectedItems: { type: Function },
      deleteStep: { type: Function },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`<list-component
        .stepsList=${this.stepsList}
        .selectStep=${this.selectStep}
        .swapListItems=${this.swapListItems}
      ></list-component>
      <form-component
        .stepsList=${this.stepsList}
        .saveOnPause=${this.saveOnPause}
        .selectedStep=${this.selectedStep}
        .saveSelectedItems=${this.saveSelectedItems}
        .deleteStep=${this.deleteStep}
      ></form-component> `;
  }
}

customElements.define('content-component', StepsContent);
