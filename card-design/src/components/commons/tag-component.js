import { LitElement, html, css } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';

export class TagComponent extends LitElement {
  static get styles() {
    return css`
      .tag {
        width: fit-content;
        display: flex;
        background: rgb(216, 216, 216);
        border-radius: 25px;
        padding: 2px 5px;
        border: 1px solid rgb(166 165 165);
      }

      .profile {
        border: 1px solid orange;
        background: orange;
      }

      .text {
        margin: 0 2px;
      }

      .visible {
        display: none;
      }

      .hash {
        margin: 0 2px;
        color: blue;
      }
    `;
  }

  render() {
    return html`
      <div
        class="tag ${classMap({ profile: this.getAttribute('profile-tag') })}"
      >
        <h5
          class="hash ${classMap({
            visible: this.getAttribute('profile-tag'),
          })}"
        >
          #
        </h5>
        <h5 class="text">${this.getAttribute('text')}</h5>
      </div>
    `;
  }
}

customElements.define('tag-component', TagComponent);
