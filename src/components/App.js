import { ThanosText } from './ThanosText.js';
import { LinkAlias } from './LinkAlias.js';
import { WhoAmI } from './WhoAmI.js';
import { BackgroundLoader } from './BackgroundLoader.js';
import { EasterEgg } from './EasterEgg.js';

export default class App {
  constructor() {
    this.modules = [
      new ThanosText(),
      new LinkAlias(),
      new WhoAmI(),
      new BackgroundLoader(),
      new EasterEgg()
    ];
  }

  init() {
    this.modules.forEach(mod => mod.init());
  }
}