import LesCollinesOutside from "./lesCollinnesOutside.jpg";

const aboutpage = () => {
  const aboutpageDivContent = document.querySelector("#content");
  aboutpageDivContent.classList.add("aboutpage");

  const aboutpageDivLeft = document.createElement("div");
  aboutpageDivLeft.setAttribute("class", "aboutpage-left");
  aboutpageDivContent.appendChild(aboutpageDivLeft);

  const aboutpageHeader = document.createElement("header");
  aboutpageHeader.setAttribute("class", "aboutpage");
  aboutpageDivLeft.appendChild(aboutpageHeader);

  const aboutpageNav = document.createElement("nav");
  aboutpageNav.setAttribute("class", "aboutpage");
  aboutpageHeader.appendChild(aboutpageNav);

  const aboutpageButtonHome = document.createElement("button");
  aboutpageButtonHome.setAttribute("class", "aboutpage");
  aboutpageButtonHome.setAttribute("id", "homeBtn");
  aboutpageButtonHome.textContent = "Home";
  aboutpageNav.appendChild(aboutpageButtonHome);

  const aboutpageButtonMenu = document.createElement("button");
  aboutpageButtonMenu.setAttribute("class", "aboutpage");
  aboutpageButtonMenu.setAttribute("id", "menuBtn");
  aboutpageButtonMenu.textContent = "Menu";
  aboutpageNav.appendChild(aboutpageButtonMenu);

  const aboutpageButtonAbout = document.createElement("button");
  aboutpageButtonAbout.setAttribute("class", "aboutpage");
  aboutpageButtonAbout.setAttribute("id", "aboutBtn");
  aboutpageButtonAbout.textContent = "About";
  aboutpageNav.appendChild(aboutpageButtonAbout);

  const aboutpageDivText = document.createElement("div");
  aboutpageDivText.setAttribute("class", "aboutpage-text");
  aboutpageDivLeft.appendChild(aboutpageDivText);

  const ourstoryTitle = document.createElement("h2");
  ourstoryTitle.setAttribute("class", "aboutpage");
  ourstoryTitle.textContent = "Our story";
  aboutpageDivText.appendChild(ourstoryTitle);

  const ourstoryText1 = document.createElement("p");
  ourstoryText1.setAttribute("class", "aboutpage");
  ourstoryText1.textContent =
    "Our founder, Clara Müller, was enchanted by the majestic beauty of the Swiss Alps long before Alpine Bliss came into existence. A lifelong vegan and passionate advocate for sustainable living, Clara dreamed of creating a space where the serenity of the mountains would meld with the delights of vegan cuisine. In 2018, this dream became a reality when she established Alpine Bliss, transforming an authentic Swiss chalet into a haven for vegan food lovers.";
  aboutpageDivText.appendChild(ourstoryText1);

  const ourstoryBreak1 = document.createElement("br");
  aboutpageDivText.appendChild(ourstoryBreak1);

  const ourstoryText2 = document.createElement("p");
  ourstoryText2.classList.add("aboutpage");
  ourstoryText2.textContent =
    "Perched at an elevation of 2000 meters, Alpine Bliss offers more than just a meal; it provides an unforgettable experience. The journey to our restaurant is an adventure in itself, whether you choose to hike up the scenic trails or take a ride on the local cable car. Once here, you are greeted with fresh mountain air, stunning vistas, and the peace that only such heights can offer.";
  aboutpageDivText.appendChild(ourstoryText2);

  const aboutpageDivImage = document.createElement("div");
  aboutpageDivImage.classList.add("aboutpage-img");
  aboutpageDivContent.appendChild(aboutpageDivImage);

  const aboutpageImage = document.createElement("img");
  aboutpageImage.setAttribute("id", "restaurantOutside");
  aboutpageImage.setAttribute("src", LesCollinesOutside);
  aboutpageImage.setAttribute("alt", "Outside of the restaurant");
  aboutpageDivImage.appendChild(aboutpageImage);

  const contactTitle = document.createElement("h2");
  contactTitle.classList.add("aboutpage");
  contactTitle.textContent = "Contact";
  aboutpageDivImage.appendChild(contactTitle);

  const phone = document.createElement("p");
  phone.textContent = "+99 999 999 999";
  aboutpageDivImage.appendChild(phone);
  const adress = document.createElement("p");
  adress.textContent = "High up, in the Mountains";
  aboutpageDivImage.appendChild(adress);
};

export { aboutpage };
