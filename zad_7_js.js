const calcuateFactorial = (value) => {
  if (value < 0) return 'Błąd, wartość mniejsza od 0';

  let result = 1;
  for (let i = 2; i <= value; i++) {
    result *= i;
  }

  return result;
};

const arr1 = [5, 10, 15].map((el) => calcuateFactorial(el));
const arr2 = [1, 6, 9].map((el) => calcuateFactorial(el));
const arr3 = [5, 4, 3, 2, 1].map((el) => calcuateFactorial(el));

console.log(arr1, arr2, arr3);
