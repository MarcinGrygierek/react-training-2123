const arr = [1, 2, 3, 4, 5];
const arr2 = arr;

// w momencie przypisania skopiowaliśmy referencję
// w związku z czym arr oraz arr2 wskazują na to samo miejsce w pamięci
arr2.push(100);

// starszy sposób skopiowania tablicy
const arr3 = arr.slice();

// lepiej
const arr4 = [...arr];

// skopiowanie + dodanie nowego elementu
const arr5 = [123456, ...arr, 1234];

// kopiowanie obiektów
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = { ...obj1 };

// uwaga przy obiektach z zagnieżdzonymi obiektami, tablicami!
const obj3 = {
  a: 1,
  b: 2,
  c: [1, 2, 3, 4, 5],
};

const obj4 = { ...obj3 };

// kopiowanie obiektów z zagnieżdżeniami
const obj5 = {
  ...obj3,
  c: [...obj3.c],
};
