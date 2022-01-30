import { LitElement, html, css } from 'lit';
import '@material/mwc-textfield';
import '@material/mwc-textarea';
import '@material/mwc-select';

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
        value="New Step"
        name="step"
        @input=${(e) => {
          this.saveOnPause(e);
        }}
      >
      </mwc-textfield>
      <mwc-select class="form-element" outlined label="Requirements">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item value="0">Item 0</mwc-list-item>
        <mwc-list-item value="1">Item 1</mwc-list-item>
        <mwc-list-item value="2">Item 2</mwc-list-item>
        <mwc-list-item value="3">Item 3</mwc-list-item>
      </mwc-select>

      <!-- Text Editor Goes Here -->

      <mwc-textarea
        class="form-element"
        name="metrics"
        @input=${(e) => {
          this.saveOnPause(e);
        }}
        outlined
        label="Metrics"
      >
      </mwc-textarea>

      <mwc-select class="form-element" outlined label="Security Roles">
        <mwc-list-item></mwc-list-item>
        <mwc-list-item value="0">Item 0</mwc-list-item>
        <mwc-list-item value="1">Item 1</mwc-list-item>
        <mwc-list-item value="2">Item 2</mwc-list-item>
        <mwc-list-item value="3">Item 3</mwc-list-item>
      </mwc-select>
    `;
  }
}

customElements.define('form-component', StepsForm);
