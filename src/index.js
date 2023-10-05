import _ from "lodash";

import createHeader from "../src/header.js";
import homeContent from "../src/homeContent.js";
import createMenu from "../src/menu.js";
import createContact from "../src/contact.js";

const IndexController = () => {
  createHeader();

  // Getting Nav ids
  const homeNav = document.getElementById("home");
  const menuNav = document.getElementById("menu");
  const contactNav = document.getElementById("contact");

  const state = {
    HOMESTATE: 0,
    MENUSTATE: 1,
    CONTACTSTATE: 2,
  };
  let currentState = state.HOMESTATE;

  homeNav.addEventListener("click", () => {
    currentState = state.HOMESTATE;
    controlState();
  });
  menuNav.addEventListener("click", () => {
    currentState = state.MENUSTATE;
    controlState();
  });
  contactNav.addEventListener("click", () => {
    currentState = state.CONTACTSTATE;
    createContact();
  });

  const controlState = () => {
    switch (currentState) {
      case state.HOMESTATE:
        homeContent();
        break;
      case state.MENUSTATE:
        createMenu();
        break;
      case state.CONTACTSTATESTATE:
        break;
    }
  };

  controlState();
};

IndexController();
