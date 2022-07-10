import { Module } from '../core/module';
import { random } from '../utils';

export class BackgroundModule extends Module {
  #content;
  #IMAGE_URL;
  #imageArray;
  #randomIndex;
  #numberOfImages;

  constructor(type, text) {
    super(type, text);
    this.closePrev = false;
    this.#imageArray = [];
    this.#numberOfImages = 100;
    this.#randomIndex = random(0, this.#numberOfImages - 1);
    this.#content = document.querySelector('.content');
    this.#IMAGE_URL = `https://picsum.photos/v2/list?page=2&limit=${
      this.#numberOfImages
    }`;
  }

  #isBackground() {
    const classList = [...this.#content.classList];
    return classList.some((el) => el === 'content_background');
  }

  async trigger() {
    try {
      if (this.#isBackground()) {
        const rundomIndx = random(0, this.#imageArray.length - 1);
        const image = this.#imageArray[rundomIndx];
        this.#content.style.backgroundImage = `url(${image.download_url})`;
      } else {
        const response = await fetch(`${this.#IMAGE_URL}`);
        const decodingResponse = await response.json();
        const image = decodingResponse[this.#randomIndex];
        this.#content.classList.add('content_background');
        this.#content.style.backgroundImage = `url(${image.download_url})`;
        this.#content.style.backgroundSize = 'cover';
        this.#imageArray = [...decodingResponse];
      }
    } catch {
      console.error(
        'Произошла ошибка в получении данных... При запросе background image'
      );
    } finally {
    }
  }
}
