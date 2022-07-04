import { Module } from './core/module';
import { randomShape } from '../../assets/shape';
import { addEventContainer, random, randomColor } from './utils';

export class ShapeModule extends Module {
  #body;
  #width;
  #height;
  constructor(type, text) {
    super(type, text);
    this.#body = document.querySelector('body');
    this.#width = document.documentElement.clientWidth;
    this.#height = document.documentElement.clientHeight;
  }

  #createFigure() {
    const eventContainer = this.#body.querySelector(`.${this.type}`);
    const svgContainer = document.createElement('div');
    const color = randomColor();

    svgContainer.setAttribute('id', 'svg-container');
    svgContainer.className = 'svg';
    svgContainer.innerHTML = randomShape();
    svgContainer.style.left = `${random(30, this.#width - 190)}px`;
    svgContainer.style.top = `${random(30, this.#height - 190)}px`;

    const svg = svgContainer.querySelector('svg');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke', `${color}`);
    svg.setAttribute('stroke-linecap', 'butt');
    svg.setAttribute('stroke-linejoin', 'bevel');

    return eventContainer.append(svgContainer);
  }

  #autoRemove() {
    const svg = this.#body.querySelector(`.svg`);
    // setTimeout(() => {
    //   svg.remove();
    // }, 4000);
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
    addEventContainer(this.type);
    this.#showFugure();
    this.#autoRemove();
  }
}
