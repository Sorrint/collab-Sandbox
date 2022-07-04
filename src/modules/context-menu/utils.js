export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function randomColor() {
  const opacity = Math.round(Math.random() * 100) / 100;
  const value1 = random(0, 255);
  const value2 = random(0, 255);
  const value3 = random(0, 255);
  return `rgba(${value1}, ${value2}, ${value3}, ${opacity})`;
}

export function addZero(number) {
  if (number < 10) {
    number = `0${number}`;
  }
  return number;
}

export function addEventContainer(type) {
  const content = document.querySelector('.content');
  const container = document.querySelector(`.${type}`);
  if (!container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'content__wrapper active';
    wrapper.classList.add(type);
    content.append(wrapper);
  }
}
