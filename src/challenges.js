// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringSplit) {
  // seu código aqui
  stringSplit = stringSplit.split(' ');
  return stringSplit;
}

// Desafio 4
function concatName(arrayConcat) {
  // seu código aqui
  let stringConcat = `${arrayConcat[arrayConcat.length - 1]}, ${arrayConcat[0]}`;
  return stringConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(biggerArray) {
  // seu código aqui
  let n = biggerArray[0];
  let m = 0;
  for (let i in biggerArray) {
    if (n < biggerArray[i]) {
      n = biggerArray[i];
      m = 1;
    } else if (n === biggerArray[i]) {
      m += 1;
    }
  }
  return m;
}

// Desafio 7
function catAndMouse(rat, cat1, cat2) {
  // seu código aqui
  let tom = Math.abs(rat - cat1);
  let butch = Math.abs(rat - cat2);
  let output;
  if (tom < butch) {
    output = 'cat1';
  } else if (tom > butch) {
    output = 'cat2';
  } else {
    output = 'os gatos trombam e o rato foge';
  }
  return output;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 8
function fizzBuzz(numberArray) {
  // seu código aqui
  let flag = [];
  for (let i of numberArray) {
    if (doubleAndNothing(i)) {
      if (doubleOrNothing(i)) {
        flag.push('fizzBuzz');
      } else {
        flag.push('bug!');
      }
    } else if (threeOrFive(i)) {
      flag.push('fizz');
    } else {
      flag.push('buzz');
    }
  } return flag;
}

function doubleAndNothing(x) {
  return (x % 3 === 0 && x % 5 === 0) || (x % 3 !== 0 && x % 5 !== 0);
}

function doubleOrNothing(x) {
  return x % 3 === 0 && x % 5 === 0
}

function threeOrFive(y) {
  return y % 3 === 0;
}

// function threeOrFive(y) {
//   let flag = 0;
//   if (y % 3 === 0) {
//     flag = 2;
//   } else if (y % 5 === 0) {
//     flag = 1;
//   } return flag;
// }

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
