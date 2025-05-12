export class EasterEgg {
    constructor(selector = '#easter-egg') {
      this.el = document.querySelector(selector);
    }
  
    init() {
      if (!this.el) return;
      const top = Math.random() * window.innerHeight;
      const left = Math.random() * window.innerWidth;
      Object.assign(this.el.style, { top: `${top}px`, left: `${left}px` });
    }
}