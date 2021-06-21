class Duck {
  constructor(name) {
    this.name = name;
  }

  quack() {
    console.log(`I am a ${this.name} duck and I am quacking`);
  }
}

const duck1 = new Duck('Howard');
duck1.quack();

class RubberDuck extends Duck {
  constructor(name, size) {
    super(name);
    this.size = size;
  }

  quack() {
    console.log('Rubber ducks can not quack');
  }
}

const duck2 = new RubberDuck('Big yellow duck', 'big');
duck2.quack();
