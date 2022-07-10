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
    this.el.addEventListener('click', (event) => {
      const { target } = event;
      const wrapper = this.#body.querySelector('.content__wrapper');
      if (
        wrapper.dataset.type &&
        wrapper.dataset.type !== target.dataset.type
      ) {
        const openedModule = this.modules.find(
          (module) => module.type === wrapper.dataset.type
        );
        // openedModule.close();
      }
      const selectedModule = this.modules.find(
        (module) => module.type === target.dataset.type
      );
      selectedModule.trigger();
      wrapper.dataset.type = selectedModule.type;
      this.close();
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

    selectedModule.addEventListener(
      'click',
      () => {
        const wrapper = this.#body.querySelector('.content__wrapper');
        if (wrapper.dataset.type) {
          const openedModule = this.modules.find(
            (module) => module.type === wrapper.dataset.type
          );
          openedModule.close();
        }
        wrapper.dataset.type = module.type;
        module.trigger();
        this.close();

        // const timer = this.#body.querySelector('.user-input');
        // const message = this.#body.querySelector('.weather-block');
        // const click = this.#body.querySelector('.count-numbers');
        // const sound = this.#body.querySelector('.logoSound');

        // if (timer || message || click || sound) {
        //   console.log(wrapper.dataset.type);
        //   wrapper.innerHTML = '';
        //   wrapper.dataset.type = module.type;
        //   module.trigger();
        //   this.close();
        // } else {
        //   module.trigger();
        //   this.close();
        // }
      }
      // 'once'
    );
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
      // this.#processTheClick(module);
    }
  }
}
