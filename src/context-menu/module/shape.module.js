import { Module } from '../core/module';
import { shapeData } from '../assets/shapeData';
import { random, randomColor } from '../utils';
import { PARENT_HEIGHT, PARENT_WIDTH } from '../global';

export class ShapeModule extends Module {
  #body;
  constructor(type, text) {
    super(type, text);
    this.closePrev = false;
    this.#body = document.querySelector('body');
  }

  #createFigure() {
    const wrapper = this.#body.querySelector(`.content__wrapper`);
    const svgContainer = document.createElement('div');
    const svgColor = randomColor();

    svgContainer.setAttribute('id', 'svg-container');
    svgContainer.className = 'svg';
    svgContainer.innerHTML = shapeData();
    svgContainer.style.left = `${random(30, PARENT_WIDTH - 400)}px`;
    svgContainer.style.top = `${random(30, PARENT_HEIGHT - 300)}px`;
    svgContainer.style.fill = svgColor;
    svgContainer.style.stroke = '#1e1e1e';
    svgContainer.style.strokeWidth = '1';

    return wrapper.append(svgContainer);
  }

  #autoRemove() {
    const svg = this.#body.querySelector('.svg');
    setTimeout(() => {
      svg.remove();
    }, 4000);
  }

  #showFugure() {
    const svgContainer = this.#body.querySelector('#svg-container');
    if (svgContainer) {
      svgContainer.remove();
      this.#createFigure();
    } else {
      this.#createFigure();
    }
  }

  trigger() {
    this.#showFugure();
    this.#autoRemove();
  }
}
