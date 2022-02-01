import { LitElement, html, css } from 'lit';
import '@material/mwc-textfield';
import '@material/mwc-textarea';
import '@material/mwc-select';
import './filterSearch-component';
export class StepsForm extends LitElement {
  static get styles() {
    return css`
      .form-element {
        margin-top: 20px;
      }
    `;
  }

  static get properties() {
    return {
      saveOnPause: { type: Function },
      selectedStep: { type: Object },
      saveSelectedItems: { type: Function },
      stepsList: { type: Array },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <mwc-textfield
        class="form-element"
        outlined
        label="Name *"
        .value=${this.selectedStep.step}
        name="step"
        @input=${(e) => {
          this.saveOnPause(e);
        }}
      >
      </mwc-textfield>

      <filter-component
        .saveSelectedItems=${this.saveSelectedItems}
        .filterableList=${this.selectedStep.requirements}
        .inputFieldName=${'requirements'}
      ></filter-component>
      <!-- Text Editor Goes Here -->

      <mwc-textarea
        class="form-element"
        name="metrics"
        @input=${(e) => {
          this.saveOnPause(e);
        }}
        .value=${this.selectedStep.metrics ? this.selectedStep.metrics : ''}
        outlined
        label="Metrics"
      >
      </mwc-textarea>

      <filter-component
        .saveSelectedItems=${this.saveSelectedItems}
        .filterableList=${this.selectedStep.securityRoles}
        .inputFieldName=${'securityRoles'}
      ></filter-component>
    `;
  }
}

customElements.define('form-component', StepsForm);
