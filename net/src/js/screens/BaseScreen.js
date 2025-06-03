export default class BaseScreen {
  constructor() {
    this.element = document.createElement("div");
  }

  mount(parent) {
    parent.appendChild(this.element);
  }

  unmount() {
    this.element.remove();
  }
}