import { LitElement, html, css } from 'lit';

export class BindingGroup extends LitElement {
  static get styles() {
    return css`
      .scroll {
        height: 110px;
        overflow: auto;
        margin-top: 10px;
        padding: 5px;
        border: 1px solid #d6d6d6;
      }

      ::-webkit-scrollbar {
        width: 15px;
      }
      .bind-wrapper {
        margin-top: 10px;
      }
      .bind-wrapper label {
        color: #a7a7a9;
      }
      ::-webkit-scrollbar-thumb {
        background: #d0cece;
        border-radius: 20px;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #989898;
        border-radius: 20px;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
      }
    `;
  }

  render() {
    return html`
      <div class="bind-wrapper">
        <label>Binding Group</label>
        <div class="scroll">
          <slot> </slot>
        </div>
      </div>
    `;
  }
}

customElements.define('binding-group', BindingGroup);
