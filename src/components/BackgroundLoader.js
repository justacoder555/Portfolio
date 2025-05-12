export class BackgroundLoader {
    constructor(url = '/public/media/BG/among-trees.1920x1080.gif', className = 'hd-bg-gif') {
      this.url = url;
      this.className = className;
    }
  
    init() {
      const img = new Image();
      img.src = this.url;
      img.onload = () => {
        console.log(`Background image loaded`);
        document.body.classList.add(this.className)
      };
      img.onerror = () => console.error(`Failed to load background image: ${this.url}`);
    }
}