import Carousel from './components/Carousel';
import Youtube from './components/Youtube';
import Header from './components/Header';
import Scrolly from './components/Scrolly';
import Accordion from './components/Accordion';
import Form from './components/Form';

export default class ComponentFactory {
  constructor() {
    this.componentList = {
      Form,
      Accordion,
      Scrolly,
      Header,
      Youtube,
      Carousel,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');
    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        new this.componentList[componentName](element);
      } else {
        console.log(`la composante ${componentName} n'existe pas`);
      }
    }
  }
}
