import { LitElement, html, css } from 'lit';

export class SideBarComponent extends LitElement {
  static get styles() {
    return css`
      .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .answers {
        background: green;
        border-radius: 5px;
        color: white;
        text-align: center;
        padding: 7px;
      }

      .number,
      .answer {
        margin: 0;
      }

      .flag-img {
        margin-top: 30px;
        width: 30px;
        height: 30px;
        opacity: 0.6;
      }
    `;
  }

  render() {
    return html`
      <div class="sidebar">
        <div class="answers">
          <h2 class="number">8</h2>
          <h4 class="answer">answers</h4>
        </div>
        <img class="flag-img" src="../images/icon/flag.png" />
      </div>
    `;
  }
}

customElements.define('sidebar-component', SideBarComponent);
