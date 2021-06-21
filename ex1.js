function test() {
  console.log('test');
}

test();

foo2();

var foo2 = function () {
  console.log('test');
};

foo3();

const foo3 = function () {
  console.log('test');
};
