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

//Init
homepage();

const homeButton = document.querySelector("#homeBtn");
const menuButton = document.querySelector("#menuBtn");
const aboutButton = document.querySelector("#aboutBtn");

homeButton.addEventListener("click", () => {
  if (content.classList.contains("homepage")) {
    content.classList.remove("homepage");
  } else if (content.classList.contains("menupage")) {
    content.classList.remove("menupage");
  } else if (content.classList.contains("aboutpage")) {
    content.classList.remove("aboutpage");
  }
  openPage("home");
});

menuButton.addEventListener("click", () => {
  if (content.classList.contains("homepage")) {
    content.classList.remove("homepage");
  } else if (content.classList.contains("menupage")) {
    content.classList.remove("menupage");
  } else if (content.classList.contains("aboutpage")) {
    content.classList.remove("aboutpage");
  }
  openPage("menu");
});

aboutButton.addEventListener("click", () => {
  if (content.classList.contains("homepage")) {
    content.classList.remove("homepage");
  } else if (content.classList.contains("menupage")) {
    content.classList.remove("menupage");
  } else if (content.classList.contains("aboutpage")) {
    content.classList.remove("aboutpage");
  }
  openPage("about");
});
