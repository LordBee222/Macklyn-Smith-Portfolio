import Home from './screens/Home.js';
import About from './screens/About.js';
import Projects from './screens/Projects.js';
import ScreenManager from './ScreenManager.js';


document.addEventListener('DOMContentLoaded', () => {
    console.log('Setup script loaded');
    const app = document.getElementById("app");
    const manager = new ScreenManager(app);
    manager.setScreen(Home);
    document.getElementById("homeBtn").onclick = () => { console.log("hIT HOME"); manager.setScreen(Home)};
    document.getElementById("aboutBtn").onclick = () => manager.setScreen(About);
    document.getElementById("projectsBtn").onclick = () => manager.setScreen(Projects);
});