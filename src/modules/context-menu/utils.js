export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function randomColor() {
  const value1 = random(0, 255);
  const value2 = random(0, 255);
  const value3 = random(0, 255);
  return `rgb(${value1}, ${value2}, ${value3})`;
}

export function addZero(number) {
  if (number < 10) {
    number = `0${number}`;
  }
  return number;
}

export function addEventContainer(type) {
  const content = document.querySelector('.content');
  const container = document.querySelector(`.content__wrapper`);
  if (!container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'content__wrapper';
    wrapper.classList.add(type);
    content.append(wrapper);
  } else {
    // container.innerHTML = ``;
    container.classList.add(type);
  }
}
