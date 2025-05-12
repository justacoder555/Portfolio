export class LinkAlias {
    constructor(attribute = 'data-url') {
        this.attribute = attribute;
    }

    init() {
        document.querySelectorAll(`[${this.attribute}]`).forEach(el => {
        const url = el.getAttribute(this.attribute);
        if (url) el.addEventListener('click', () => window.location.assign(url));
        });
    }
}