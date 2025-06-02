export default class ScreenManager {
  constructor() {
    this.screens = {};
    this.currentScreen = null;
  }

  renderScreen(_screen) {
    switch (_screen) {
      case "login":
        this.setCurrentScreen("login");
        break;
      case "register":
        this.setCurrentScreen("register");
        break;
      case "home":
        this.setCurrentScreen("home");
        break;
      case "settings":
        this.setCurrentScreen("settings");
        break;
      default:
        console.error(`Unknown screen: ${_screen}`);
        break;
    }
  }

  addScreen(name, screen) {
    this.screens[name] = screen;
  }

  removeScreen(name) {
    delete this.screens[name];
  }

  setCurrentScreen(name) {
    if (this.currentScreen) {
      this.currentScreen.hide();
    }
    this.currentScreen = this.screens[name];
    if (this.currentScreen) {
      this.currentScreen.show();
    }
  }

  getCurrentScreen() {
    return this.currentScreen;
  }

  getElement(_id){return document.getElementById(_id);}
}