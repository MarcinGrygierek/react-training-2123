const cars = [
  {
    name: 'Toyota',
    isBroken: false,
  },
  {
    name: 'Fiat',
    isBroken: true,
  },
  {
    name: 'Mercedes',
    isBroken: false,
  },
  {
    name: 'Porsche',
    isBroken: true,
  },
];

const getBrokenCars = (carsArray) => {
  return carsArray
    .filter((el) => el.isBroken)
    .map((el) => {
      return `Samochód ${el.name} jest zepsuty`;
    });
};

console.log(getBrokenCars(cars));
