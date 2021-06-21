const obj = {
  a: 10,
  b: 20,
  c: 30,
};

// 1 opcja
const obj2 = {
  a: obj.a,
  b: obj.b,
  d: 100,
};

// 2 opcja
const { a, b } = obj;
const obj3 = {
  a,
  b,
  d: 100,
};
