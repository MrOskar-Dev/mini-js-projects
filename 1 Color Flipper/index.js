const body = document.body;
const greenBtn = document.getElementById('green');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const randomBtn = document.getElementById('random-js');


function setColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  const color = `rgb(${r},${g},${b})`;
  body.style.backgroundColor = color;
}


greenBtn.addEventListener('click', () => setColor('green'));
redBtn.addEventListener('click', () => setColor('red'));
blueBtn.addEventListener('click', () => setColor('blue'));
randomBtn.addEventListener('click', randomColor);