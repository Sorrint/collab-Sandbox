import { Module } from './core/module';
import { addEventContainer } from './utils';

export class Soundmodule extends Module {
  constructor(type, text) {
    super(type, text);
    this.logoHTML = document.createElement('logoSound');
    this.audioHTML = document.createElement('audio');
    this.textHint = document.createElement('span');
    this.soundContainer = document.createElement('div');
  }

  trigger() {
    addEventContainer(this.type);
    const eventContainer = document.querySelector(`.${this.type}`);

    let context, analyser, src, array;
    const hasLogo = document.querySelector('.logo');
    if (hasLogo) {
      this.logoHTML.remove();
      this.audioHTML.remove();
      this.textHint.remove();
      this.textHint = document.createElement('div');
      this.logoHTML = document.createElement('logo');
      this.audioHTML = document.createElement('audio');
    }

    let random = Math.floor(Math.random() * 5 + 1);
    this.audioHTML.src = `src/assets/sound/${random}.mp3`;
    this.audioHTML.className = 'audio';
    this.audioHTML.setAttribute('controls', '');
    this.audioHTML.setAttribute('autoplay', '');
    this.audioHTML.volume = 0.3;

    this.logoHTML.className = 'logo';

    this.soundContainer.style.display = 'flex';
    this.soundContainer.style.justifyContent = 'center';

    this.textHint.style.display = 'block';
    this.textHint.style.position = 'relative';
    this.textHint.style.textAlign = 'center';
    this.textHint.style.fontSize = '30px';
    this.textHint.style.marginBottom = '50px';
    this.textHint.textContent = 'Клик по кругу запустит анимацию';

    this.soundContainer.prepend(this.audioHTML, this.logoHTML);
    eventContainer.append(this.textHint, this.soundContainer);

    let logo = document.querySelector('.logo').style;

    let audio = document.querySelector('.audio');

    this.logoHTML.addEventListener('mouseover', function () {
      if (!context) {
        preparation();
      }
    });

    function preparation() {
      context = new AudioContext();
      analyser = context.createAnalyser();
      src = context.createMediaElementSource(audio);
      src.connect(analyser);
      analyser.connect(context.destination);
      loop();
    }

    function loop() {
      if (!audio.paused) {
        window.requestAnimationFrame(loop);
      }
      array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(array);

      logo.minHeight = array[40] + 'px';
      logo.width = array[40] + 'px';
    }
  }
}
