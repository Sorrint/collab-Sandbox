import { Module } from '../core/module';
import { addEventContainer, random } from '../utils';
import { soundData } from '../assets/soundData';

export class Soundmodule extends Module {
  // #logoHTML;
  // #audioHTML;
  // #textHint;
  // #soundContainer;
  // #context;
  // #contextID;
  // #analyser;
  // #src;
  // #array;
  // #trackNumber;
  // #wrapper;

  constructor(type, text) {
    super(type, text);
    this.logoHTML = document.createElement('div');
    this.audioHTML = document.createElement('audio');
    this.textHint = document.createElement('span');
    this.soundContainer = document.createElement('div');
    // this.contextID = 0;
    // this.context = new AudioContext();
    // this.analyser;
    // this.src;
    // this.array;
    // this.trackNumber = random(1, 5);
    // this.wrapper = document.querySelector('.content__wrapper');

    let random = Math.floor(Math.random() * 5 + 1);
    this.audioHTML.src = `src/modules/context-menu/assets/sound/${random}.mp3`;
    this.audioHTML.className = 'audio';
    this.audioHTML.setAttribute('controls', '');
    this.audioHTML.setAttribute('autoplay', '');
    this.audioHTML.volume = 0.3;

    this.logoHTML.className = 'logoSound';
    this.soundContainer.className = 'soundContainer';

    this.textHint.className = 'soundHint';
    this.textHint.textContent = soundData[random - 1].trackName;
  }

  trigger() {
    const wrapper = document.querySelector('.content__wrapper');

    this.soundContainer.prepend(this.logoHTML);

    wrapper.append(this.textHint, this.soundContainer, this.audioHTML);
    // wrapper.dataset.type = this.type;

    // const hasLogo = document.querySelector('.logoSound');
    // if (!hasLogo) {
    // this.#soundContainer.remove();
    // this.#logoHTML.remove();
    // this.#audioHTML.remove();
    // this.#textHint.remove();
    //   this.#textHint = document.createElement('div');
    //   this.#logoHTML = document.createElement('div');
    //   this.#audioHTML = document.createElement('audio');
    //   this.#soundContainer = document.createElement('div');
    // }
    // let analyser, src, array;

    // let logoStyle = document.querySelector('.logoSound').style;

    // let audio = document.querySelector('.audio');
    // let context;
    // this.contextID = setTimeout(() => {
    //   if (!context) {
    //     this.preparation();
    //   }
    // }, 1000);

    // this.audioHTML.addEventListener('mouseout', () => {
    //   this.loop();
    // });
  }

  // preparation() {
  //   let context;

  //   context = new AudioContext();
  //   this.analyser = context.createAnalyser();
  //   this.src = context.createMediaElementSource(this.audioHTML);
  //   context.connect(this.analyser);
  //   this.analyser.connect(context.destination);
  //   this.loop();
  // }

  // loop() {
  //   if (!audio.paused) {
  //     window.requestAnimationFrame(this.loop);
  //   }
  //   this.array = new Uint8Array(this.analyser.frequencyBinCount);
  //   this.analyser.getByteFrequencyData(this.array);
  //   this.logoHTML.style.minHeight = this.array[40] + 'px';
  //   this.logoHTML.style.width = this.array[40] + 'px';
  // }

  // close() {
  // clearInterval(this.context);
  // this.wrapper.innerHTML = ``;
  // this.soundContainer.remove();
  // this.logoHTML.remove();
  // this.audioHTML.remove();
  // this.textHint.remove();
  // clearTimeout(this.contextID);
  // this.context = '';
  // this.analyser = '';
  // this.src = '';
  // this.#array.remove();
  // this.trackNumber = '';
  // this.textHint = document.createElement('div');
  // this.logoHTML = document.createElement('div');
  // this.audioHTML = document.createElement('audio');
  // this.soundContainer = document.createElement('div');
  // }
}
