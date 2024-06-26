import debounce from "./debounce.js";
import Utils from "./utils.js";

export default class Resize extends Utils {
  constructor() {
    super();
  }

  bindEvents() {
    this.onResize = debounce(this.onResize.bind(this), 1);
  }

  onResize() {
    clearTimeout(this.resizeId);
    this.resizeId = setTimeout(() => {
      if (window.innerWidth >= 768) {
        if (document.querySelector(".active-menu-mobile") !== null) {
          this.removeMenuActiveClass();
        }
      }
    }, 100);
  }

  addResizeEvent() {
    window.addEventListener("resize", this.onResize);
  }

  init() {
    this.addResizeEvent();
  }
}
