import { Module } from '../core/module';
import { citiesData } from '../assets/citiesData';

export class CustomMessage extends Module {
  constructor(type, text) {
    super(type, text);
    this.closePrev = true;
  }

  async trigger() {
    try {
      const wrapper = document.querySelector('.content__wrapper');
      const W_URL = `https://api.openweathermap.org/data/2.5/weather?q=${citiesData()}&appid=3574141fd05c9364f6d45f88f3898d1d&units=metric`;

      const response = await fetch(W_URL);
      const weather = await response.json();
      const temp = Math.round(weather.main.temp);

      const weatherWrapper = document.createElement('div');
      weatherWrapper.className = 'weather__wrapper';

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
      wrapper.prepend(weatherBlock);
      wrapper.classList.add(`${this.type}`);

      setTimeout(() => {
        weatherBlock.remove();
      }, 5000);
    } catch (error) {
      console.error('Произошла ошибка в получении данных...');
    } finally {
    }
  }

  close() {
    const elements = document.querySelectorAll('.weather-block');
    elements.forEach((element) => element.remove());
  }
}