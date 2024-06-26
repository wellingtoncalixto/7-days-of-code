export default class Utils {
  constructor() {
    this.bindEvents();
  }

  removeMenuActiveClass() {
    const nav = document.getElementById("nav-menu");
    nav.classList.remove("active-menu-mobile");
  }

  addMenuActiveClassClass() {
    const nav = document.getElementById("nav-menu");
    nav.classList.add("active-menu-mobile");
  }

  bindEvents() {
    this.removeMenuActiveClass = this.removeMenuActiveClass.bind(this);
    this.addMenuActiveClassClass = this.addMenuActiveClassClass.bind(this);
  }
}
