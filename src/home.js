import LesCollinesEntrance from "./lesCollinnesEntrance.jpg";

const homepage = () => {
  const homepageDivContent = document.querySelector("#content");

  const homepageDivLeft = document.createElement("div");
  homepageDivLeft.setAttribute("class", "homepage-left");
  homepageDivContent.appendChild(homepageDivLeft);

  const homepageHeader = document.createElement("header");
  homepageHeader.setAttribute("class", "homepage");
  homepageDivLeft.appendChild(homepageHeader);

  const homepageNav = document.createElement("nav");
  homepageNav.setAttribute("class", "homepage");
  homepageHeader.appendChild(homepageNav);

  const homepageButtonHome = document.createElement("button");
  homepageButtonHome.setAttribute("class", "homepage");
  homepageButtonHome.setAttribute("id", "homeBtn");
  homepageButtonHome.textContent = "Home";
  homepageNav.appendChild(homepageButtonHome);

  const homepageButtonMenu = document.createElement("button");
  homepageButtonMenu.setAttribute("class", "homepage");
  homepageButtonMenu.setAttribute("id", "menuBtn");
  homepageButtonMenu.textContent = "Menu";
  homepageNav.appendChild(homepageButtonMenu);

  const homepageButtonAbout = document.createElement("button");
  homepageButtonAbout.setAttribute("class", "homepage");
  homepageButtonAbout.setAttribute("id", "aboutBtn");
  homepageButtonAbout.textContent = "About";
  homepageNav.appendChild(homepageButtonAbout);

  const homepageDivText = document.createElement("div");
  homepageDivText.setAttribute("class", "homepage-text");
  homepageDivLeft.appendChild(homepageDivText);

  const homepageTitle = document.createElement("h1");
  homepageTitle.textContent = "Alpine Bliss";
  homepageDivText.appendChild(homepageTitle);

  const homepageParagraph1 = document.createElement("p");
  homepageParagraph1.textContent = "Welcome to Alpine Bliss.";
  homepageDivText.appendChild(homepageParagraph1);

  const homepageParagraph2 = document.createElement("p");
  homepageParagraph2.textContent = `Nestled in the breathtaking Swiss Alps at a remarkable altitude of
            2000 meters, Alpine Bliss is not just a restaurant—it's a sanctuary
            for those who cherish the harmony between nature and nourishment.`;
  homepageDivText.appendChild(homepageParagraph2);

  const homepageParagraph3 = document.createElement("p");
  homepageParagraph3.textContent = `Our fully vegan menu is crafted with passion, ensuring that every
            dish celebrates the purity and vibrancy of plant-based ingredients.`;
  homepageDivText.appendChild(homepageParagraph3);

  const homepageDivImage = document.createElement("div");
  homepageDivImage.setAttribute("class", "homepage-img");
  homepageDivContent.appendChild(homepageDivImage);

  const homepageImage = document.createElement("img");
  homepageImage.setAttribute("id", "restaurantEntrance");
  homepageImage.setAttribute("src", LesCollinesEntrance);
  homepageImage.setAttribute("alt", "Entrance of the restaurant");
  homepageDivImage.appendChild(homepageImage);
};

export { homepage };
