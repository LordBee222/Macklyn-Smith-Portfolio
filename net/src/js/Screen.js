import ScreenManager from "./ScreenManager";

export default class Screen{
    static HOME = new Screen("home", "homeSection");
    static LOGIN = new Screen("login", "loginSection");
    static REGISTER = new Screen("register", "registerSection");
    static SETTINGS = new Screen("settings", "settingsSection");


    constructor(_name, _sectionId){
        this.id = _id;
        this.section = ScreenManager.getElement(_sectionId);
    }

    show(){
        this.section.style.display = "flex";
    }

    hide(){
        this.section.style.display = "none";
    }
}