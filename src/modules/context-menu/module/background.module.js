import { Module } from '../core/module';
import { random } from '../utils';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.closePrev = false;
  }

  trigger() {
    const main = document.querySelector('main');
    const isClass = document.querySelector('.content_backgroundSize');
    const image = 'url(https://picsum.photos/1400/800?grayscale)';
    const image2 = 'url(https://picsum.photos/1400/900?grayscale)';
    if (isClass) {
      main.style.backgroundImage = '';
      main.style.backgroundImage = `${image2}`;
    } else {
      main.style.backgroundImage = `${image}`;
      main.classList.add('content_backgroundSize');
    }
  }
}
