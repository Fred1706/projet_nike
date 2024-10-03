import Swiper from 'swiper/bundle';

export default class Carrousel {
  constructor(element) {
    this.element = element;
    this.options = {
      allowTouchMove: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };
    this.init();
  }

  init() {
    this.setOptions();
    let swiper = new Swiper(this.element, this.options);
  }

  setOptions() {
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
        768: {
          slidesPerView: 2.5,
        },
      };
    }

    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      };
    }

    if ('loop' in this.element.dataset) {
      this.options.loop = 'true';
    }

    if ('slides' in this.element.dataset) {
      this.options.slidesPerView =
        this.element.dataset.slides || this.options.slidesPerView;
    }

    if ('hero' in this.element.dataset) {
      this.options.allowTouchMove = false;
      this.options.speed = 3000;

    }


    if ('partenaire' in this.element.dataset) {
      this.options.spaceBetween = 60;
      this.options.slideToClickedSlide = true;
      this.options.initialSlide = 1;
      this.options.centeredSlides = true;
      this.options.speed = 500;
    }
  }
}
