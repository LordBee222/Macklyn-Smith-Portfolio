export default class ScreenManager {
  constructor(appElement) {
    this.app = appElement;
    this.currentScreen = null;
  }

  setScreen(ScreenClass) {
    if (this.currentScreen) {
      this.currentScreen.unmount();
    }
    this.currentScreen = new ScreenClass();
    this.currentScreen.mount(this.app);
  }
}
