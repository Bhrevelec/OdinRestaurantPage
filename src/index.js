import "./style.css";
import { homepage } from "./home.js";
import { menupage } from "./menu.js";
import { aboutpage } from "./about.js";

const content = document.querySelector("#content");
const openPage = (tab) => {
  //clear current content
  content.innerHTML = "";
  //remove existing classes (for CSS styling)
  if (content.classList.contains("homepage")) {
    content.classList.remove("homepage");
  } else if (content.classList.contains("menupage")) {
    content.classList.remove("menupage");
  } else if (content.classList.contains("aboutpage")) {
    content.classList.remove("aboutpage");
  }

  //load new content
  switch (tab) {
    case "home":
      homepage();
      attachEventListeners();
      break;
    case "menu":
      menupage();
      attachEventListeners();
      break;
    case "about":
      aboutpage();
      attachEventListeners();
      break;
  }
};

//function that attaches event listenrs to the navigation buttons
function attachEventListeners() {
  document
    .getElementById("homeBtn")
    .addEventListener("click", () => openPage("home"));
  document
    .getElementById("menuBtn")
    .addEventListener("click", () => openPage("menu"));
  document
    .getElementById("aboutBtn")
    .addEventListener("click", () => openPage("about"));
}

//Init
openPage("home");
