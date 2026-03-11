'use strict';

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const eph = new PersonCl('Ephraim', 1988);
console.log(eph);
eph.calcAge();
console.log(eph instanceof PersonCl);

// Prototypes
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
eph.greet();

console.log(eph.__proto__ === PersonCl.prototype);
