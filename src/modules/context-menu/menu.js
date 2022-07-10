import { Menu } from './core/menu';
import { Module } from './core/module';
import { PARENT_HEIGHT, PARENT_WIDTH } from '../../global';

export class ContextMenu extends Menu {
  #body;
  #parent;
  constructor(selector) {
    super(selector);
    this.modules = [];
    this.#body = document.querySelector('body');
    this.#parent = this.#body.querySelector('.content');
    this.#parent.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.open();
      this.setBorder(event);
    });
    this.#processTheClick();
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

  #processTheClick() {
    this.el.addEventListener('click', (event) => {
      const { target } = event;
      const wrapper = this.#body.querySelector('.content__wrapper');
      const wrapperType = wrapper.dataset.type;

      const selectedModule = this.modules.find(
        (module) => module.type === target.dataset.type
      );
      const previousModule = this.modules.find(
        (module) => module.type === wrapper.dataset.type
      );

      if (selectedModule === previousModule) {
        selectedModule.trigger();
        this.close();
      }

      if (!wrapperType) {
        wrapper.dataset.type = selectedModule.type;
        selectedModule.trigger();
        this.close();
      }

      if (
        wrapperType &&
        selectedModule.closePrev === true &&
        selectedModule !== previousModule
      ) {
        wrapper.classList.remove(`${wrapperType}`);
        previousModule.close();
        wrapper.dataset.type = selectedModule.type;
        selectedModule.trigger();
        this.close();
      }

      if (wrapperType && selectedModule.closePrev === false) {
        selectedModule.trigger();
        this.close();
      }
    });
  }

  showModules() {
    return this.modules;
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
      this.modules.push(module);
    }
  }
}
