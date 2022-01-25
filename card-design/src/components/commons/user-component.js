import { LitElement, html, css } from 'lit';
import './content-component';
import './engagers-component';

export class UserComponent extends LitElement {
  static get styles() {
    return css`
      .profile {
        display: flex;
      }

      .detail {
        margin-left: 10px;
        padding-top: 3px;
      }

      .name,
      .date {
        margin: 0;
      }

      .date {
        color: grey;
      }

      .user-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      .tag-details {
        display: flex;
      }

      .interval {
        margin: 0 10px;
      }

      engagers-component {
        margin-left: auto;
      }

      .menu {
        width: 25px;
        height: 25px;
        opacity: 0.7;
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`
      <div class="profile">
        <img
          class="user-img"
          src="../images/users/user2.jpeg"
          alt="profileImg"
        />
        <div class="detail">
          <h4 class="name">Pukar Subedi</h4>
          <div class="tag-details">
            <p class="date">November 9, 2020 at 6:35pm</p>
            <p class="interval">|</p>
            <tag-component text="In Progress" profile-tag=${true}>
            </tag-component>
          </div>
        </div>

        <engagers-component> </engagers-component>

        <img class="menu" src="../images/icon/menu.png" alt="menu" />
      </div>

      <content-component> </content-component>
    `;
  }
}

customElements.define('user-component', UserComponent);
