import { getJSON } from '../utils/DataStore.js';

export class WhoAmI {
  constructor(id = 'whoami', interval = 2000, speed = 50) {
    this.el       = document.getElementById(id);
    this.interval = interval;
    this.speed    = speed;
    this.index    = 0;

    this.roles    = [];

  }

  async init() {
    if (!this.el) return;

    this.roles = await this.loadRoles();
    if (this.roles.length > 0) {
      this.update();
    }
  }

  async loadRoles() {
    try {
      // Fetch the JSON data from the specified path
      const data = await getJSON('./src/json/data.json');
      return data.roles;
    } catch (error) {
      console.error('Failed to load roles:', error);
      return [];
    }
  }

  update() {
    if (!this.el) return;
    const next = this.roles[this.index];
    this.index = (this.index + 1) % this.roles.length;
    this._type(next);
  }

  _type(text) {
    let idx = 0;
    const step = () => {
      if (!this.el) return;
      if (idx < text.length) {
        this.el.textContent = text.slice(0, ++idx);
        setTimeout(step, this.speed);
      } else {
        // full text shown, wait then move on
        setTimeout(() => this.update(), this.interval);
      }
    };
    step();
  }
}
