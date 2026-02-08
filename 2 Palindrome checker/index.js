const inputElement = document.getElementById('input');
const checkBtn = document.getElementById('check-btn');


function check() {
  const value = inputElement.value;
  const reverse =  reverseString(value);
  if (value === reverse) {
    alert('Its the same');
  } else {
    alert('not the same');
  }
  clearInput();
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function clearInput() {
  inputElement.value = '';
}


checkBtn.addEventListener('click', check);


