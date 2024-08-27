export default class Accordion {
  constructor(element) {
    this.element = element;
    this.options = {
      notClosing: false,
      autoOpen: 0,
    };
    this.pastilles = this.element.querySelectorAll('.js-pastille');
    this.isActive = false;
    this.init();
  }

  init() {
    
    this.setOptions();

    for (let i = 0; i < this.pastilles.length; i++) {
      const pastille = this.pastilles[i];

      pastille.addEventListener('click', this.openAccordion.bind(this));

      if ('autoOpen' in pastille.dataset) {
        pastille.classList.add('is-active');
      }
    }
  }

  setOptions() {
    if ('notClosing' in this.element.dataset) {
      this.options.notClosing = true;
    }

    for (let i = 0; i < this.pastilles.length; i++) {
      const pastille = this.pastilles[i];

      if ('autoOpen' in pastille.dataset) {
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
        for (let i = 0; i < this.pastilles.length; i++) {
          const pastille = this.pastilles[i];

          pastille.classList.remove('is-active');

          
        }
      }

      event.currentTarget.classList.add('is-active');
    }
  }
}
