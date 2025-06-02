import { ScreenManager } from "net\src\js\ScreenManager.js";
import { Screen } from "net\src\js\Screen.js";

const manager = new ScreenManager();

document.addEventListener('DOMContentLoaded', () => {
    console.log('Setup script loaded');
    manager.renderScreen()
});