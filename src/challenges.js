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

// Desafio 8
function fizzBuzz(numberArray) {
  // seu código aqui
  let flag = [];
  for (let i of numberArray) {
    if (i % 3 === 0 && i % 5 === 0) {
      flag.push('fizzBuzz');
    } else if (i % 3 === 0) {
      flag.push('fizz');
    } else if (i % 5 === 0) {
      flag.push('buzz');
    } else {
      flag.push('bug!')
    }
  } return flag;
}

// Desafio 9
function encode(stringEncode) {
  // seu código aqui
  let stringReplace1 = stringEncode.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3');
  let stringReplace2 = stringReplace1.replace(/o/g, '4').replace(/u/g, '5');
  return stringReplace2;
}

function decode(stringDecode) {
  // seu código aqui
  let stringReplace1 = stringDecode.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i');
  let stringReplace2 = stringReplace1.replace(/4/g, 'o').replace(/5/g, 'u');
  return stringReplace2;
}

// Desafio 10
function techList(arrayTech, stringTech) {
  // seu código aqui
  arrayTech.sort();
  let flag = [];
  if (arrayTech.length !== 0) {
    for (let i in arrayTech) {
      if (!flag[i]) {
        flag.push({ name: stringTech, tech: arrayTech[i] });
      }
    }
  } else {
    flag = 'Vazio!';
  } return flag;
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
