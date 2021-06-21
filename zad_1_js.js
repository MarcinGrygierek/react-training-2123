// function getSum(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(getSum([1, 2, 3, 4, 5]));
// console.log(getSum([5, 10, 15, 20]));
// console.log(getSum([2, 10, 9, 11]));

const getSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(getSum([1, 2, 3, 4, 5]));
console.log(getSum([5, 10, 15, 20]));
console.log(getSum([2, 10, 9, 11]));
