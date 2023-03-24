// Exercise 1

// • Add complete typing
// • Make the Snake class inherit from Animal
// • Make it so that the name member cannot be publicly accessed

class Animal {
  constructor(protected name: string) {}
  move(meters: number) {
    console.log(`${this.name} moved ${meters}m.`);
  }
}

class Snake extends Animal {
  move(meters: number = 5) {
    console.log("Slithering...");
    super.move(meters);
    // should call on parent's `move` method, w/ a default
    // slither of 5 meters
  }
}

const aSnake = new Snake("A snake");

aSnake.move(7);
