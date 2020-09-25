function fatorial(numero) {
  let result = 1;
  if (numero <= 1) {
    return (result = 1);
  } else {
    for (numero; 1 < numero; numero--) {
      result *= numero;
    }
  }
  return result;
}
console.log(fatorial(3));

const fatorialArrow = (numero) => {
  let result = 1;
  if (numero <= 1) {
    return (result = 1);
  } else {
    for (numero; 1 < numero; numero--) {
      result *= numero;
    }
  }
  return result;
};
console.log(fatorialArrow(3));
