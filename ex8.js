const arr = [1, 2, 3, 4, 5];

// map
const arr2 = arr.map((el) => el * el);

// filter
const arr3 = arr.filter((el) => el % 2 === 0);

// forEach
arr.forEach((el) => console.log(el));

// reduce
const sum = arr.reduce((acc, curr) => acc + curr, 1000);
