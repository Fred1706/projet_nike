export default class Accordion {
  constructor(element) {
    this.element = element;
    this.options = {
      notClosing: false,
      autoOpen: 0,
    };
    this.headers = this.element.querySelectorAll('.js-header');
    this.isActive = false;
    this.init();
  }

  init() {
    this.setOptions();

    for (let i = 0; i < this.headers.length; i++) {
      const header = this.headers[i];

      header.addEventListener('click', this.openAccordion.bind(this));

      if ('autoOpen' in header.dataset) {
        header.classList.add('is-active');
      }
    }
  }

  setOptions() {
    if ('notClosing' in this.element.dataset) {
      this.options.notClosing = true;
    }

    for (let i = 0; i < this.headers.length; i++) {
      const header = this.headers[i];

      if ('autoOpen' in header.dataset) {
        header.classList.add('is-active');
        this.options.autoOpen++;
      }
    }

    if (this.options.autoOpen > 1) {
      this.options.notClosing = true;
    }
  }

  openAccordion(event) {
    if (event.currentTarget.classList.contains('is-active')) {
      event.currentTarget.classList.remove('is-active');
    } else {
      if (this.options.notClosing == false) {
        for (let i = 0; i < this.headers.length; i++) {
          const header = this.headers[i];

          header.classList.remove('is-active');

          console.log('une des deux est vraie');
        }
      }

      event.currentTarget.classList.add('is-active');
    }
  }
}
