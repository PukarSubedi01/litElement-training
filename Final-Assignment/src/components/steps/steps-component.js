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
      saveOnPause: { type: Function },
      selectStep: { type: Function },
      addStep: { type: Function },
      stepsList: { type: Array },
      step: { type: Object },
      selectedStep: { type: Object },
      showProgress: { type: Boolean },
      swapListItems: { type: Function },
      saveSelectedItems: { type: Function },
      filterableList: { type: Array },
    };
  }

  constructor() {
    super();
    this.saveOnPause = this.saveOnPause.bind(this);
    this.addStep = this.addStep.bind(this);
    this.selectStep = this.selectStep.bind(this);
    this.swapListItems = this.swapListItems.bind(this);
    this.saveSelectedItems = this.saveSelectedItems.bind(this);

    this.step = { step: 'New Step' };

    // localStorage.setItem('steps', JSON.stringify([this.step]));
    this.stepsList = JSON.parse(localStorage.getItem('steps'));

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
    this.filterableList = this.stepsList[this.selectedIndex][name];
    if (this.filterableList === undefined) this.filterableList = [];
    if (!value) return;
    this.filterableList.push(value);
    this.stepsList[this.selectedIndex][name] = this.filterableList;
    this.stepsList = [...this.stepsList];
    localStorage.setItem('steps', JSON.stringify(this.stepsList));
    this.filterableList = [];
  }
}

customElements.define('steps-component', StepComponent);
