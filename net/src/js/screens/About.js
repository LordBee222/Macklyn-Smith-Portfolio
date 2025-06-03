import BaseScreen from './BaseScreen.js';

export default class About extends BaseScreen {
  constructor() {
    super();
    this.element.innerHTML = `
      <h1>About Me</h1>
      <p>I'm a 16-year-old developer learning cool stuff.</p>
    `;
  }
}
