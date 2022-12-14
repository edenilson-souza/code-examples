class Shape {
  area(): number {
    // Default implementation that returns 0
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // Override the area() method to calculate the area of a circle
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  // Override the area() method to calculate the area of a rectangle
  area(): number {
    return this.width * this.height;
  }
}


const rectangle = new Rectangle(14, 3);
console.log(rectangle.area());

const circle = new Circle(14);
console.log(circle.area());
