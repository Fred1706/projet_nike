import Swiper from 'swiper/bundle';

export default class Carrousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };
    this.init();
  }

  init() {
    console.log('yoo');
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
        pauseOnMouseEnter: true,
      };
    }

    if ('loop' in this.element.dataset) {
      this.options.loop = 'true';
    }

    if ('slides' in this.element.dataset) {
      this.options.slidesPerView =
        this.element.dataset.slides || this.options.slidesPerView;
    }

    if ('actualite' in this.element.dataset) {
      this.options.slidesPerView = 3.5;
      this.options.spaceBetween = 30;
      this.options.breakpoints = {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        400: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
      };
    }
  }
}
