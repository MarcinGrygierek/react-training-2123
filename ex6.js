// Zakres w przypadku standardowej funkcji
// jest tworzony przez funkcję

function test1() {
  var b = 2;

  function test2() {
    var c = 3;
  }

  console.log(b, c);
}

// Zakres w przypadku funkcji strzałkowych
// jest tworzony blokowo {}

const test2 = () => {
  const b = 2;

  const test3 = () => {
    const c = 3;
  };

  console.log(b, c);
};

// Większe różnice widać w przypadku pętli
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); //jest dostępne z powodu zakresu funkcyjnego

for (let k = 0; k < 5; k++) {
  console.log(k);
}
console.log(k); //nie jest dostępne z powodu zakresu blokowego
