import BaseScreen from './BaseScreen.js';

export default class Home extends BaseScreen {
  constructor() {
    super();
    this.element.innerHTML = `
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page.</p>
    `;
  }
}
