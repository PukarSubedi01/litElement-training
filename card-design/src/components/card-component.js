import { LitElement, html, css } from 'lit';
import './commons/sidebar-component';
import './commons/user-component';

export class CardComponent extends LitElement {
  static get styles() {
    return css`
      .card {
        display: flex;
        padding: 10px;
      }

      sidebar-component {
        width: 5%;
      }

      user-component {
        margin-left: 2%;
        width: 93%;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="card">
        <sidebar-component> </sidebar-component>
        <user-component> </user-component>
      </div>
    `;
  }
}

customElements.define('card-component', CardComponent);
