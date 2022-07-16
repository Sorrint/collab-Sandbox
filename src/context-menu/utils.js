export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function randomColor() {
  return `hsl(${random(20, 220)}, 100%, 60%)`;
}

export function addZero(number) {
  if (number < 10) {
    number = `0${number}`;
  }
  return number;
}
