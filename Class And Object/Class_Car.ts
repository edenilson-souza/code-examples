// define a class that represents a car
class Car {
    // define the constructor function
    constructor(public make: string, public model: string, public year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // define a method that returns the full name of the car
    getFullName(): string {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  
  // create an instance of the Car class
  const car = new Car('Ford', 'Fiesta', 2020);
  
  // print the car's full name to the console
  console.log(car.getFullName()); // output: "2020 Ford Fiesta"