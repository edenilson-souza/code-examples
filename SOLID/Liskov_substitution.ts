/*

The Liskov substitution principle is a concept in computer science that states that, in a program, if S is a subtype of T, then objects of type T may be replaced with objects of type S without causing any errors. In other words, the principle states that subclasses should be able to be used interchangeably with their parent classes without causing any issues in the program.

Here's a simple example: Let's say we have a class called Animal that has a method called makeNoise() that returns a string representing the noise that the animal makes. We could have a subclass of Animal called Dog that has its own implementation of the makeNoise() method that returns the string "bark".

According to the Liskov substitution principle, we should be able to use an object of type Dog wherever an object of type Animal is expected, and the program should still function correctly. So, for example, if we have a function that takes an Animal object and calls the makeNoise() method on it, we should be able to pass a Dog object to that function and the function should correctly call the Dog class's implementation of makeNoise() and return "bark".

In general, the Liskov substitution principle helps to ensure that our programs are well-designed and maintainable, by making sure that subclasses can be used in the same way as their parent classes.

*/

/*
O princípio de substituição de Liskov é um conceito em ciência da computação que afirma que, em um programa, se S for um subtipo de T, então objetos do tipo T podem ser substituídos por objetos do tipo S sem causar nenhum erro. Em outras palavras, o princípio afirma que as subclasses devem poder ser usadas de forma intercambiável com suas classes pai sem causar nenhum problema no programa.

Aqui está um exemplo simples: Digamos que temos uma classe chamada Animal que possui um método chamado makeNoise() que retorna uma string representando o barulho que o animal faz. Poderíamos ter uma subclasse de Animal chamada Dog que possui sua própria implementação do método makeNoise() que retorna a string "latido".

De acordo com o princípio de substituição de Liskov, devemos ser capazes de usar um objeto do tipo Dog sempre que um objeto do tipo Animal for esperado, e o programa ainda deve funcionar corretamente. Assim, por exemplo, se tivermos uma função que pega um objeto Animal e chama o método makeNoise() nele, devemos ser capazes de passar um objeto Dog para essa função e a função deve chamar corretamente a implementação da classe Dog de makeNoise( ) e retorne "latir".

Em geral, o princípio de substituição de Liskov ajuda a garantir que nossos programas sejam bem projetados e de fácil manutenção, garantindo que as subclasses possam ser usadas da mesma forma que suas classes-pai.

*/

//EXEMPLO ANIMAL 

class Animal {
  makeNoise(): string {
    return "Some noise";
  }
}

class Dog extends Animal {
  makeNoise(): string {
    return "Bark";
  }
}

function makeAnimalNoise(animal: Animal) {
  return animal.makeNoise();
}

const dog = new Dog();
console.log(makeAnimalNoise(dog)); // Output: "Bark"

const animal = new Animal();
console.log(makeAnimalNoise(animal)); //Output: "Some noise"






//OUTRO EXEMPLO

// define a base class for shapes
abstract class Shape {
  abstract getArea(): number;
}

// define a subclass for rectangles
class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }
  
  getArea(): number {
    return this.width * this.height;
  }
}

// define a subclass for circles
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// create a function that calculates the total area of a list of shapes
function getTotalArea(shapes: Shape[]): number {
  let totalArea = 0;

  for (const shape of shapes) {
    totalArea += shape.getArea();
  }

  return totalArea;
}

// create a list of shapes
const shapes = [new Rectangle(10, 5), new Circle(2), new Rectangle(7, 3)];

// calculate and print the total area of the shapes
console.log(getTotalArea(shapes)); // output: 104.555921538...
