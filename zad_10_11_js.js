class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    console.log(`Point has coordinates (${this.x}, ${this.y})`);
  }
}

class Point3D extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }

  show() {
    console.log(`Point has coordinates (${this.x}, ${this.y}, ${this.z})`);
  }
}

const point = new Point(10, 20);
const point3D = new Point3D(9, 8, 7);

point.show();
point3D.show();
