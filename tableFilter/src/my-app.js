/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './components/root-component';

export class MyApp extends LitElement {
  render() {
    return html`<main><root-component></root-component></main>`;
  }
}

customElements.define('my-app', MyApp);
