import BaseScreen from './BaseScreen.js';

export default class Projects extends BaseScreen {
  constructor() {
    super();
    this.element.innerHTML = `
      <h1>Projects</h1>
      <ul>
        <li>Portfolio Website</li>
        <li>JavaScript Game</li>
        <li>TypeScript App</li>
      </ul>
    `;
  }
}
