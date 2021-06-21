const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const arr = [1, 2, 3, 4, 5];

// stare podejście
const _a = obj.a;
const _d = obj.d;
const el_1 = arr[0];
const el_2 = arr[1];

// podejście ES6
const { a, b, c, d } = obj;
const [el1, el2, , el4] = arr;
