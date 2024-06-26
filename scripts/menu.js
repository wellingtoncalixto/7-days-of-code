import Utils from "./utils.js";

export default class Menu extends Utils {
  constructor() {
    super();
  }

  bindEvents() {
    this.onClickMenuIcon = this.onClickMenuIcon.bind(this);
  }

  onClickMenuIcon() {
    const menu = document.querySelector(".active-menu-mobile");
    if (menu === null) {
      this.addMenuActiveClassClass();
    } else if (menu !== null) {
      this.removeMenuActiveClass();
    }
  }

  addMenuOnClickEventListener() {
    const hamburguerMenuIcon = document.getElementById("hamburguer-menu-icon");
    hamburguerMenuIcon.addEventListener("click", this.onClickMenuIcon);
  }

  init() {
    this.bindEvents();
    this.addMenuOnClickEventListener();
  }
}
