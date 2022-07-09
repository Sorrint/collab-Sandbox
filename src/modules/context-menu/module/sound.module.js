import { Module } from '../core/module';
import { addEventContainer, random } from '../utils';
import { soundData } from '../assets/soundData';

export class Soundmodule extends Module {
  #logoHTML;
  #audioHTML;
  #textHint;
  #soundContainer;

  constructor(type, text) {
    super(type, text);
    this.#logoHTML = document.createElement('div');
    this.#audioHTML = document.createElement('audio');
    this.#textHint = document.createElement('span');
    this.#soundContainer = document.createElement('div');
  }

  trigger() {
    addEventContainer(this.type);
    const eventContainer = document.querySelector(`.${this.type}`);
    let context, analyser, src, array;
    const hasLogo = document.querySelector('.logoSound');
    if (hasLogo) {
      this.#logoHTML.remove();
      this.#audioHTML.remove();
      this.#textHint.remove();
      this.#textHint = document.createElement('div');
      this.#logoHTML = document.createElement('div');
      this.#audioHTML = document.createElement('audio');
    }

    let trackNumber = random(1, 5);
    this.#audioHTML.src = `src/modules/context-menu/assets/sound/${trackNumber}.mp3`;
    this.#audioHTML.className = 'audio';
    this.#audioHTML.setAttribute('controls', '');
    this.#audioHTML.setAttribute('autoplay', '');
    this.#audioHTML.volume = 0.3;

    this.#logoHTML.className = 'logoSound';
    this.#soundContainer.className = 'soundContainer';

    this.#textHint.className = 'soundHint';
    this.#textHint.textContent = soundData[trackNumber - 1].trackName;

    this.#soundContainer.prepend(this.#logoHTML);
    eventContainer.append(
      this.#textHint,
      this.#soundContainer,
      this.#audioHTML
    );

    let logoStyle = document.querySelector('.logoSound').style;

    let audio = document.querySelector('.audio');

    setTimeout(() => {
      if (!context) {
        preparation();
      }
    }, 1000);

    this.#audioHTML.addEventListener('mouseout', () => {
      loop();
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
      logoStyle.minHeight = array[40] + 'px';
      logoStyle.width = array[40] + 'px';
    }
  }
}
