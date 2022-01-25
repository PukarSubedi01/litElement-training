import { LitElement, html, css } from 'lit';

export class CategoryComponent extends LitElement {
  static get styles() {
    return css`
      .category-head {
        font-size: 18px;
        font-weight: bold;
      }
    `;
  }

  static get properties() {
    return {
      category: { type: String },
    };
  }

  constructor() {
    super();
    this.category = '';
  }

  render() {
    return html` <div class="category-head">${this.category}</div> `;
  }
}

customElements.define('category-component', CategoryComponent);
