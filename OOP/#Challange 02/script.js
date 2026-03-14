'use strict';

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/* ******************************************** */
/*                   SOLUTION                   */
// Objective 1
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(
      `BROOOMMM BROOOM.... Your ${this.make}'s current speed is ${this.speed} hm/h`,
    );
  }

  brake() {
    this.speed -= 5;
    console.log(
      `BRAKE!!! Your ${this.make}'s current speed is ${this.speed} km/h`,
    );
  }

  // Objective 2
  get speedUS() {
    this.speed / 1.6;
    console.log(`Current speed of your ${this.make} is ${this.speed} mi/h`);
  }

  // Objective 3
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();
ford.brake();
ford.brake();

ford.speedUS = 50;
ford.speedUS;
console.log(ford);

/* ******************************************** */
