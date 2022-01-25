import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';
import { classMap } from 'lit-html/directives/class-map.js';

export class EngagersComponent extends LitElement {
  static get styles() {
    return css`
      .engager {
        display: flex;
        position: relative;
      }

      .engager-img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 2px solid white;
        position: absolute;
      }

      .more {
        opacity: 0.7;
        background: rgb(226, 226, 226);
      }
    `;
  }

  constructor() {
    super();

    this.engagersUrls = [
      '../images/users/user1.jpg',
      '../images/users/user3.jpg',
      '../images/users/user4.jpg',
      '../images/icon/more-engagers.png',
    ];

    this.engagerLength = this.engagersUrls.length;
    this.moreengager;
  }

  render() {
    return html`
      <div class="engager">
        ${this.engagersUrls.map(
          (url, index) => html`<img
            style="${styleMap({
              right: `${(this.engagerLength - index) * 20}px`,
            })}"
            class="engager-img ${classMap({
              more: this.engagerLength === index + 1,
            })}"
            src=${url}
            alt="engagers"
          />`
        )}
      </div>
    `;
  }
}
customElements.define('engagers-component', EngagersComponent);
