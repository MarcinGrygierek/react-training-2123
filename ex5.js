// ES5
function foo() {
  console.log('Foo');
}

var bar = function () {
  console.log('Bar');
};

// ES6
const baz = () => {
  console.log('baz');
};

// nawiasy nie są konieczne w przypadku jednego parametru
const bez = (a) => {
  console.log('bez', a);
};

const buz = (a, b, c) => {
  console.log('buz', a, b, c);
};

// Kiedy funkcja tylko coś zwraca można pominąć {} oraz return
// wartością zwracaną jest bezpośrednio to co znajduje się za strzałką
const buz = (a, b, c) => a + b + c;

(function () {
  console.log('test');
})();

(() => {
  console.log('test2');
})();
