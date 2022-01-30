import { LitElement, html, css } from 'lit';
import './commons/steps-header';
import './commons/content-component';
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
      addStep: { type: Function },
      stepsList: { type: Array },
      step: { type: Object },
    };
  }

  constructor() {
    super();
    this.saveOnPause = this.saveOnPause.bind(this);
    this.addStep = this.addStep.bind(this);
    this.step = { step: 'New Step' };
    this.initStep = { step: 'New Step' };
    this.stepsList = [this.initStep];
  }

  render() {
    return html`
      <steps-header .addStep=${this.addStep}></steps-header>
      <content-component
        .saveOnPause=${this.saveOnPause}
        .stepsList=${this.stepsList}
      ></content-component>
    `;
  }
  addStep() {
    this.step = this.initStep;
    this.stepsList = [...this.stepsList, this.step];
  }

  saveOnPause(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.step[name] = value;
  }
}

customElements.define('steps-component', StepComponent);
