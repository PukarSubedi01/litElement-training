import { LitElement, html, css } from 'lit';
import './tag-component';

export class ContentComponent extends LitElement {
  static get styles() {
    return css`
      .content {
        border-bottom: 1px solid rgb(166 165 165);
        margin-bottom: 10px;
      }

      .heading {
        margin-top: 25px;
      }

      .tags {
        display: flex;
      }

      tag-component {
        margin-right: 10px;
      }
    `;
  }

  render() {
    return html`
      <div class="content">
        <h3 class="heading">How do we add new containers to project?</h3>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div class="tags">
        <tag-component text="ACS"> </tag-component>
        <tag-component text="Assays"> </tag-component>
      </div>
    `;
  }
}

customElements.define('content-component', ContentComponent);
