import { Menu } from './core/menu';
import { Module } from './core/module';
import { PARENT_HEIGHT, PARENT_WIDTH } from '../../global';

export class ContextMenu extends Menu {
  #parent;
  constructor(selector) {
    super(selector);
    this.modules = [];
    this.#parent = document.querySelector('.content');
    this.#parent.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.open();
      this.setBorder(event);
    });
  }

  setBorder(event) {
    const menuWidth = this.el.offsetWidth + 30;
    const menuHeight = this.el.offsetHeight + 4;

    PARENT_WIDTH - event.clientX < menuWidth
      ? (this.el.style.left = `${PARENT_WIDTH - menuWidth}px`)
      : (this.el.style.left = `${event.clientX + 10}px`);

    PARENT_HEIGHT - event.clientY < menuHeight
      ? (this.el.style.top = `${PARENT_HEIGHT - menuHeight}px`)
      : (this.el.style.top = `${event.clientY}px`);
  }

  #processTheClick(module) {
    const selectedModule = this.el.querySelector(
      `[data-type="${module.type}"]`
    );

    selectedModule.addEventListener('click', () => {
      module.trigger();
      this.close();
    });
  }

  open() {
    this.el.classList.add('open');
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    if (module instanceof Module) {
      this.el.insertAdjacentHTML('beforeend', module.toHTML());
      this.#processTheClick(module);
    }
  }
}
