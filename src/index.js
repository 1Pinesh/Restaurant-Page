import createHeader from "../src/header.js";
import homeContent from "../src/homeContent.js";
import createMenu from "../src/menu.js";

createHeader();
createMenu();

const state = {
  HOMESTATE: 0,
  MENUSTATE: 1,
  ABOUTSTATE: 2,
};
