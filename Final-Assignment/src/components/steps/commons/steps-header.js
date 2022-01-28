import { LitElement, html, css } from 'lit';

export class StepHeader extends LitElement {
  static get styles() {
    return css`
      h2 {
        margin: 0;
      }
      .add-steps {
        display: flex;
        margin-left: auto;
        justify-content: center;
        align-items: center;
        flex-direction: row;
      }
      .add-steps:hover {
        cursor: pointer;
      }
      .add-steps span {
        color: #610eff;
        margin-left: 5px;
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
      <h2>Steps</h2>
      <div class="add-steps">
        <img src="../../images/icons/addIcon.svg" alt="Add Icon" />
        <span> Add Steps</span>
      </div>
    `;
  }
}

customElements.define('steps-header', StepHeader);
