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
  let tom = rat - cat1;
  let butch = rat - cat2;
  tom = Math.abs(tom);
  butch = Math.abs(butch);
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

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
