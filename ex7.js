const test = (a, b) => {
  return a + b;
};

// Funkcja wyższego rzędu - przyjmuje funkcję w parametrze
const test2 = (a, b, foo) => {
  return a + b + foo(a, b);
};

// Przekazanie wcześniej stworzonej funkcji
const bar = (a, b) => a * b;
test2(10, 20, bar);

// Przekazanie funkcji anonimowej
test2(10, 20, (a, b) => a * b);

// Przykład rzeczywisty
setTimeout(() => {
  console.log('Lorem ipsum');
}, 1000);

const inside = () => console.log('Lorem ipsum');
setTimeout(inside, 1000);
