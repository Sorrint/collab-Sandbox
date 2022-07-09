import { Module } from '../core/module';
import { citiesData } from '../assets/citiesData';

export class CustomMessage extends Module {
  #body;
  constructor(type, text) {
    super(type, text);
    this.#body = document.querySelector('body');
  }

  async trigger() {
    try {
      const wrapper = this.#body.querySelector('.content__wrapper');
      const timer = this.#body.querySelector('.user-input');
      const click = this.#body.querySelector('.count-numbers');
      const sound = this.#body.querySelector('.logo');

      const W_URL = `https://api.openweathermap.org/data/2.5/weather?q=${citiesData()}&appid=3574141fd05c9364f6d45f88f3898d1d&units=metric`;

      const response = await fetch(W_URL);
      const weather = await response.json();
      const temp = Math.round(weather.main.temp);

      const weatherBlock = document.createElement('div');
      weatherBlock.className = 'weather-block';

      const weatherH2 = document.createElement('h2');
      weatherH2.textContent = `${weather.name}, ${weather.sys.country} `;

      const iconAndTempBlock = document.createElement('div');
      iconAndTempBlock.className = 'icon_and_temp_block';

      const weatherDescription = document.createElement('p');
      weatherDescription.textContent = `${weather.weather[0].description}`;

      const tempPara = document.createElement('p');
      tempPara.textContent = `${temp} C`;

      const weatherIcon = document.createElement('img');
      weatherIcon.className = 'weather_icon';
      weatherIcon.setAttribute(
        'src',
        `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
      );

      iconAndTempBlock.append(weatherIcon, tempPara);
      weatherBlock.append(weatherH2, iconAndTempBlock, weatherDescription);

      if (timer || click || sound) {
        wrapper.innerHTML = '';
        wrapper.prepend(weatherBlock);
      } else {
        wrapper.prepend(weatherBlock);
      }

      setTimeout(() => {
        weatherBlock.remove();
      }, 5000);
    } catch (error) {
      console.error('Произошла ошибка в получении данных...');
    } finally {
    }
  }
}
