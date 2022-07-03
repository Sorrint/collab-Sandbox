import { Menu } from './core/menu';
import { Module } from './core/module';
import { PARENT_HEIGHT, PARENT_WIDTH } from './modules/global';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = [];
  }

  setBorder(event) {
    const menu = document.querySelector('.menu');
    console.log(this.el);
    const menuWidth = this.el.offsetWidth + 15;
    const menuHeight = this.el.offsetHeight + 4;

    PARENT_WIDTH - event.clientX < menuWidth
      ? (this.el.style.left = `${PARENT_WIDTH - menuWidth}px`)
      : (this.el.style.left = `${event.clientX + 10}px`);

    PARENT_HEIGHT - event.clientY < menuHeight
      ? (this.el.style.top = `${PARENT_HEIGHT - menuHeight}px`)
      : (this.el.style.top = `${event.clientY}px`);
  }
  open() {
    this.el.classList.add('open');
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    if (module instanceof Module) {
      this.el.innerHTML += module.toHTML();
      this.modules.push(module);
    }
  }
}
