import { Module } from './core/module';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const content = document.querySelector('.content');
    content.classList.add('content_background');
  }
}
