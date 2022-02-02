import { LitElement, html, css } from 'lit';
import './commons/steps-header';
import './commons/content-component';
import '@material/mwc-linear-progress';
export class StepComponent extends LitElement {
  static get styles() {
    return css`
      steps-header {
        display: flex;
      }
      content-component {
        display: flex;
        flex-direction: row;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Saves data to local storage when the user stops typing for certain interval of times
       */
      saveOnPause: { type: Function },
      /**
       * @type {Function}
       * @returns {void}
       * sets selected step from the list
       */
      selectStep: { type: Function },

      /**
       * @type {Function}
       * @returns {void}
       * adds step to the list
       */

      addStep: { type: Function },
      /**
       * @type {Array}
       * stores the list of steps
       */
      stepsList: { type: Array },

      /**
       * @type {Object}
       * Initializes step object for an array
       */

      step: { type: Object },

      /**
       * @type {Object}
       * Stores selected step from the list
       */

      selectedStep: { type: Object },
      /**
       * @type {Boolean}
       * Determines if the progress bar needs to be shown
       */
      showProgress: { type: Boolean },

      /**
       * @type {Function}
       * Function to swap list
       */

      swapListItems: { type: Function },

      /**
       * @type {Function}
       * Saves the item from select field to the main list and local storage
       */

      saveSelectedItems: { type: Function },

      /**
       * @type {Function}
       * Deletes the selected item from the list
       */

      deleteStep: { type: Function },

      /**
       * @type {Array}
       * List that can be filtered
       * Used for select item tag
       */

      filterableList: { type: Array },

      /**
       * @type {Array}
       * Used to store requirements item from the main list
       */

      requirements: { type: Array },
      /**
       * @type {Array}
       * Used to store security role items from the main list
       */
      securityRoles: { type: Array },
    };
  }

  constructor() {
    super();
    this.saveOnPause = this.saveOnPause.bind(this);
    this.addStep = this.addStep.bind(this);
    this.selectStep = this.selectStep.bind(this);
    this.swapListItems = this.swapListItems.bind(this);
    this.saveSelectedItems = this.saveSelectedItems.bind(this);
    this.deleteStep = this.deleteStep.bind(this);

    this.step = { step: 'New Step' };

    this.stepsList = JSON.parse(localStorage.getItem('steps'));
    if (this.stepsList === null)
      localStorage.setItem('steps', JSON.stringify([this.step]));

    this.requirements = [];
    this.securityRoles = [];

    this.stepsList.forEach((step) => {
      if (step.requirements === undefined) return;
      step.requirements.forEach((requirement) => {
        this.requirements.push(requirement);
      });

      if (step.securityRoles === undefined) return;
      step.securityRoles.forEach((role) => {
        this.securityRoles.push(role);
      });
    });

    this.selectedIndex = 0;
    this.selectedStep = this.stepsList[this.selectedIndex];

    this.timeoutId = undefined;
    this.showProgress = false;
    this.progressTimeOutId = undefined;

    this.filterableList = [];
  }

  render() {
    return html`
      <steps-header .addStep=${this.addStep}></steps-header>
      ${this.showProgress
        ? html` <mwc-linear-progress indeterminate></mwc-linear-progress> `
        : html`<mwc-linear-progress></mwc-linear-progress>`}
      <content-component
        .saveOnPause=${this.saveOnPause}
        .stepsList=${this.stepsList}
        .selectStep=${this.selectStep}
        .selectedStep=${this.selectedStep}
        .swapListItems=${this.swapListItems}
        .saveSelectedItems=${this.saveSelectedItems}
        .deleteStep=${this.deleteStep}
        .requirements=${this.requirements}
        .securityRoles=${this.securityRoles}
      ></content-component>
    `;
  }
  addStep() {
    this.step = { step: 'New Step' };
    this.stepsList = [...this.stepsList, this.step];
  }

  saveOnPause(event) {
    let name = event.target.name;
    let value = event.target.value;

    clearTimeout(this.timeOutId);
    clearTimeout(this.progressTimeOutId);

    this.progressTimeOutId = setTimeout(() => {
      this.showProgress = true;
    }, 1000);
    this.timeOutId = setTimeout(() => {
      this.stepsList[this.selectedIndex][name] = value;
      this.stepsList = [...this.stepsList];
      localStorage.setItem('steps', JSON.stringify(this.stepsList));
      this.showProgress = false;
    }, 3000);
  }
  selectStep(index) {
    this.selectedIndex = index;
    this.selectedStep = this.stepsList[index];
  }
  swapListItems(swapIndexes) {
    let temp = this.stepsList[swapIndexes.newIndex];
    this.stepsList[swapIndexes.newIndex] =
      this.stepsList[swapIndexes.previousIndex];
    this.stepsList[swapIndexes.previousIndex] = temp;
    this.stepsList = [...this.stepsList];

    localStorage.setItem('steps', JSON.stringify(this.stepsList));
  }
  saveSelectedItems(value, name) {
    console.log(value, name);
    // this.filterableList = this.stepsList[this.selectedIndex][name];
    // if (this.filterableList === undefined) this.filterableList = [];
    // if (!value) return;
    // this.filterableList.push(value);
    // this.stepsList[this.selectedIndex][name] = this.filterableList;
    // this.stepsList = [...this.stepsList];
    // localStorage.setItem('steps', JSON.stringify(this.stepsList));
    // this.filterableList = [];
  }
  deleteStep() {
    this.stepsList = [
      ...this.stepsList.slice(0, this.selectedIndex),
      ...this.stepsList.slice(this.selectedIndex + 1),
    ];

    if (this.selectedIndex === this.stepsList.length) {
      this.selectedIndex--;
      this.selectedStep = this.stepsList[this.selectedIndex];
    } else {
      this.selectedStep = this.stepsList[this.selectedIndex];
    }
    localStorage.setItem('steps', JSON.stringify(this.stepsList));
  }
}

customElements.define('steps-component', StepComponent);
