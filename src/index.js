import _ from "lodash";

import createHeader from "../src/header.js";
import homeContent from "../src/homeContent.js";
import createMenu from "../src/menu.js";

const IndexController = () => {
  createHeader();

  // Getting Nav ids
  const homeNav = document.getElementById("home");
  const menuNav = document.getElementById("menu");
  const aboutNav = document.getElementById("about");

  const state = {
    HOMESTATE: 0,
    MENUSTATE: 1,
    ABOUTSTATE: 2,
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

  aboutNav.addEventListener;

  const controlState = () => {
    switch (currentState) {
      case state.HOMESTATE:
        homeContent();
        break;
      case state.MENUSTATE:
        createMenu();
        break;
      case state.ABOUTSTATE:
        break;
    }
  };

  controlState();
};

IndexController();

function component() {
  const elements = document.createElement("div");
}
