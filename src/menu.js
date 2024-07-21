const menupage = () => {
  const menupageDivContent = document.querySelector("#content");
  menupageDivContent.classList.add("menupage");

  const menupageHeader = document.createElement("header");
  menupageHeader.setAttribute("class", "menupage");
  menupageDivContent.appendChild(menupageHeader);

  const menupageNav = document.createElement("nav");
  menupageNav.setAttribute("class", "menupage");
  menupageHeader.appendChild(menupageNav);

  const menupageButtonHome = document.createElement("button");
  menupageButtonHome.setAttribute("class", "menupage");
  menupageButtonHome.setAttribute("id", "homeBtn");
  menupageButtonHome.textContent = "Home";
  menupageNav.appendChild(menupageButtonHome);

  const menupageButtonMenu = document.createElement("button");
  menupageButtonMenu.setAttribute("class", "menupage");
  menupageButtonMenu.setAttribute("id", "menuBtn");
  menupageButtonMenu.textContent = "Menu";
  menupageNav.appendChild(menupageButtonMenu);

  const menupageButtonAbout = document.createElement("button");
  menupageButtonAbout.setAttribute("class", "menupage");
  menupageButtonAbout.setAttribute("id", "aboutBtn");
  menupageButtonAbout.textContent = "About";
  menupageNav.appendChild(menupageButtonAbout);

  const tbd = document.createElement("div");
  tbd.textContent = "delicious food, just trust me";
  menupageDivContent.appendChild(tbd);
};

export { menupage };
