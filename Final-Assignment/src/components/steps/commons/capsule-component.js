import { LitElement, html, css } from 'lit';

export class Capsules extends LitElement {
  static get styles() {
    return css`
      .capsules {
        display: flex;
        background: #dfdfdf;
        padding: 8px;
        border-radius: 20px;
      }
      .capsules span {
        margin-right: 10px;
      }
      .capsules img {
        align-self: center;
        margin-left: auto;

        height: 15px;
        width: 15px;

        opacity: 0.6;
      }
    `;
  }
  static get properties() {
    return {
      tag: { type: String },
    };
  }
  constructor() {
    super();
    this.tag = '';
  }
  render() {
    return html`
      <div class="capsules">
        <span> ${this.tag}</span>
        <img
          src="images/icons/close.png"
          @click=${() => console.log(this.tag)}
        />
      </div>
    `;
  }
}
customElements.define('capsule-component', Capsules);
