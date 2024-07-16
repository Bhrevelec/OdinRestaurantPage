import "./style.css";
import { homepage } from "./home.js";
import { menupage } from "./menu.js";
import { aboutpage } from "./about.js";

const content = document.querySelector("#content");
const openPage = (tab) => {
  //clear current content
  content.innerHTML = "";

  //load new content
  switch (tab) {
    case "home":
      homepage();
      break;
    case "menu":
      menupage();
      break;
    case "about":
      aboutpage();
      break;
  }
};

openPage("home");

const homeButton = document.querySelector("#homeBtn");
const menuButton = document.querySelector("#menuBtn");
const aboutButton = document.querySelector("#aboutBtn");

homeButton.addEventListener("click", () => {
  openPage("home");
});

menuButton.addEventListener("click", () => {
  openPage("menu");
});

aboutButton.addEventListener("click", () => {
  openPage("about");
});

//Init
