interface Animal {
  // This method is common to all animals, so it should be included in the Animal interface
  move(): void;
}

interface Mammal extends Animal {
  // Methods specific to mammals should be included in the Mammal interface
  nurse(): void;
}

interface Bird extends Animal {
  // Methods specific to birds should be included in the Bird interface
  fly(): void;
}


// A dog is a mammal, so it should only implement the Mammal interface
class Dog implements Mammal {
  move(): void {
    // Move like a mammal
    console.log("CACHORRO SE MOVENDO")
  }

  nurse(): void {
    // Nurse its young
    console.log("CACHORRO AMAMENTA")
  }
}

// A hummingbird is a bird, so it should only implement the Bird interface
class Hummingbird implements Bird {
  move(): void {
    // Move like a bird
    console.log("PASSANDO SE MOVENDO")
  }

  fly(): void {
    // Fly like a hummingbird
    console.log("PASSANDO VOANDO")
  }
}


const dog = new Dog();
dog.move();
dog.nurse();