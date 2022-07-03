import { Module } from './core/module';
import { addEventContainer, randomColor } from '../../utils';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    addEventContainer(this.type);
    const eventContainer = document.querySelector(`.${this.type}`);
    eventContainer.style.display = 'none';
    document.body.style.backgroundColor = `${randomColor()}`;
  }
}
