export class ThanosText {
    constructor(selector = '.intro__text', speed = 30) {
      this.elements = document.querySelectorAll(selector);
      this.speed = speed;
    }
  
    _typeEffect(el, newText, originalText, onComplete) {
      let index = 0;
      const add = () => {
        if (index < newText.length) {
          el.textContent = newText.slice(0, index + 1) + originalText.slice(index + 1);
          index++;
          setTimeout(add, this.speed);
        } else {
          el.textContent = newText;
          onComplete && onComplete();
        }
      };
      add();
    }
  
    _revertEffect(el, newText, originalText) {
      let index = newText.length;
      const remove = () => {
        if (index > 0) {
          el.textContent = newText.slice(0, --index) + originalText.slice(index);
          setTimeout(remove, this.speed);
        } else {
          el.textContent = originalText;
        }
      };
      remove();
    }
  
    init() {
      this.elements.forEach(el => {
        const original = el.textContent;
        const newText = `/${el.dataset.newtext}/`;
        let reversing = false;

        el.addEventListener('click', () => {
          const url = el.dataset.url;
          if (url) window.location.href = url;
        });
  
        el.addEventListener('mouseover', () => {
          if (reversing) return;
          el.classList.add('snapped');
          this._typeEffect(el, newText, original);
        });
  
        el.addEventListener('mouseout', () => {
          el.classList.remove('snapped');
          reversing = true;
          this._revertEffect(el, newText, original);
          reversing = false;
        });
      });
    }
  }