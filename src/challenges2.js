console.log(generatePhoneNumber([0, 0, 0, 2, 3, 4, 5, 6, 7, 8, 9]))

// Desafio 11
function generatePhoneNumber(x) {
  // seu código aqui
  // '(XX) XXXXX-XXXX';
  let pattern = '(';
  let amount = {};
  if (x.length < 11 || x.length > 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let i in x) {
      if (!amount[x[i]]) {
        amount[x[i]] = 1;
      } else {
        amount[x[i]] += 1;
      } if (amount[x[i]] > 2) {
        return 'não é possível gerar um número de telefone com esses valores'
      } else if (x[i] < 0 || x[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else if (i < 2) {
        pattern += x[i];
      } else if (i == 2) {
        pattern += ') ';
        pattern += x[i];
      } else if (i > 2 && i < 7) {
        pattern += x[i];
      } else if (i == 7) {
        pattern += '-';
        pattern += x[i];
      } else if (i > 7) {
        pattern += x[i];
      }
    }
  } return pattern;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
}

// Desafio 13
function hydrate(drink) {
  // seu código aqui
  let regex = drink.match(/\d+/g);
  let water = 0;
  let tip = '';
  for (let i in regex) {
    water += Number(regex[i]);
  } if (water != 1) {
    tip += water;
    tip += ' copos de água';
  } else {
    tip = '1 copo de água';
  } return tip;
}

console.log(hydrate('01 a, 5 b e 1 c'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
