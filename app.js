let input = document.getElementById('h2');
let clear = document.getElementById('clear');
let backSpace = document.getElementById('backSpace');
let percentage = document.getElementById('percentage');
let divide = document.getElementById('divide');
let nine = document.getElementById('nine');
let eight = document.getElementById('eight');
let seven = document.getElementById('seven');
let multiply = document.getElementById('multiply');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let minus = document.getElementById('minus');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let plus = document.getElementById('plus');
let s = document.getElementById('s');
let zero = document.getElementById('zero');
let dot = document.getElementById('dot');
let equalTo = document.getElementById('equalTo');
let firstNumber = 0;
let lastNumber;
let operator;
let truthy = true;

one.addEventListener('click', () => {
  if (truthy) {
    firstNumber += input.textContent;
  } else {
  }
  input.textContent += 1;
});
two.addEventListener('click', () => {
  input.textContent += 2;
});
three.addEventListener('click', () => {
  input.textContent += 3;
});
four.addEventListener('click', () => {
  input.textContent += 4;
});

five.addEventListener('click', () => {
  input.textContent += 5;
});

six.addEventListener('click', () => {
  input.textContent += 6;
});
seven.addEventListener('click', () => {
  input.textContent += 7;
});
eight.addEventListener('click', () => {
  input.textContent += 8;
});
nine.addEventListener('click', () => {
  input.textContent += 9;
});

zero.addEventListener('click', () => {
  input.textContent += 0;
});
dot.addEventListener('click', () => {
  input.textContent += dot.innerHTML;
});

plus.addEventListener('click', () => {
  input.textContent += `+`;
});
minus.addEventListener('click', () => {
  input.textContent += minus.innerHTML;
});
clear.addEventListener('click', () => {
  input.textContent = '';
});

multiply.addEventListener('click', () => {
  input.textContent += multiply.innerHTML;
});
divide.addEventListener('click', () => {
  input.textContent += divide.innerHTML;
});
equalTo.addEventListener('click', () => {
  calc(input.innerHTML);
});
backSpace.addEventListener('click', () => {
  let storing = input.innerHTML;
  let afterRemoving = '';
  storing = storing.split('');
  storing.pop();
  for (const store of storing) {
    afterRemoving += store;
  }
  input.innerHTML = afterRemoving;
});
percentage.addEventListener('click', () => {
  input.innerHTML = input.innerHTML / 100;
});

function calc(value) {
  let num1 = '';
  let first = true;
  let operateFirst = true;
  let result = '';
  value = value.split('');
  let num2 = '';
  let operator;

  for (const i of value) {
    if ((!isNaN(i) || i === '.') && first) {
      num1 += `${i}`;
      console.log(num1);
    } else if (
      ((isNaN(i) || i !== '.') && i === '+') ||
      i === '-' ||
      i === multiply.innerHTML ||
      i === divide.innerHTML
    ) {
      if (!operateFirst) {
        operate();
      }
      operateFirst = false;
      first = false;
      if (i === '+') {
        operator = '+';
      }
      if (i === '-') {
        operator = '-';
      }
      if (i === multiply.innerHTML) {
        operator = multiply.innerHTML;
      }
      if (i === divide.innerHTML) {
        operator = divide.innerHTML;
      }
      console.log(operator);
    }
    if (!first && (!isNaN(i) || i === '.')) {
      num2 += `${i}`;
    }
  }
  operate();
  function operate() {
    if (operator === '+') {
      result = parseFloat(num1) + parseFloat(num2);

      num1 = result;
      num2 = '';
      operator = '';
    } else if (operator === '-') {
      result = num1 - num2;

      num1 = result;
      num2 = '';
      operator = '';
    } else if (operator === multiply.innerHTML) {
      result = num1 * num2;
      console.log(result);
      num2 = '';
      num1 = result;
      operator = '';
    } else if (operator === divide.innerHTML) {
      result = num1 / num2;
      console.log(result);
      num1 = result;
      num2 = '';
      operator = '';
    }
  }
  input.textContent = result;
}
