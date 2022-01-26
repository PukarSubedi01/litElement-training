import { LitElement, html, css } from 'lit';

import './commons/input-fields';
import './commons/binding-group';
import './commons/bind-items';
import '@vaadin/vaadin-date-picker/vaadin-date-picker';
import '@polymer/paper-input/paper-textarea';
import '@polymer/paper-button/paper-button';

export class FormComponent extends LitElement {
  static get styles() {
    return css`
      .heading-wrapper {
        display: flex;
      }

      .fomr-heading {
        font-family: 'Times New Roman';
        font-weight: 200;
        margin: 10px;
      }
      .close {
        align-self: center;
        margin-left: auto;

        height: 25px;
        width: 25px;

        margin-right: 10px;
        opacity: 0.6;
      }
      vaadin-date-picker {
        width: 100%;
      }

      .buttons {
        padding: 7px;
        margin-bottom: 20px;
      }
      paper-button {
        padding: 10px;
        width: 1%;
      }
      paper-button.create {
        background: #e91e62;
        color: white;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.checkListItems = [
      'BRD2 Affinity_High_Affinity',
      'BRD2 AMP_PNP_Competitive',
      'BRD2 NRX-0459676_non-competitive',
      'BRD2 Affinity_test1',
      'BRD2 Affinity_test2',
      'BRD2 Affinity_test3',
    ];
  }

  render() {
    return html`
      <div class="heading-wrapper">
        <h2 class="form-heading">Create Binding Group</h2>
        <img class="close" src="../images/close.png" alt="close" />
      </div>
      <input-fields leftField="Name" rightField="Ligands Promoted">
      </input-fields>
      <input-fields
        leftField="Description"
        rightField="Total Ligands in Binding Group"
      >
      </input-fields>
      <vaadin-date-picker label="Date"> </vaadin-date-picker>

      <binding-group>
        ${this.checkListItems.map(
          (item) => html`<bind-items text="${item}"> </bind-items>`
        )}
      </binding-group>

      <paper-textarea label="Comments" rows="4"> </paper-textarea>

      <div class="buttons">
        <paper-button raised class="create">CREATE</paper-button>
        <paper-button>CANCEL</paper-button>
      </div>
    `;
  }
}

customElements.define('form-component', FormComponent);
