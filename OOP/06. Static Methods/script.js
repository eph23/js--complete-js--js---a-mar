'use strict';

// Constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const ephConstructor = new Person('Ephraim', 1988);
console.log(ephConstructor);

// Static method
Person.hey = function () {
  console.log(`Hey! 👋🏻👋🏻👋🏻`);
};
Person.hey();

// Class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this._fullName}`);
  }

  // Getter
  get age() {
    return `Your age is ${2037 - this.birthYear}`;
  }

  // Setter
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    }
  }

  get fullName() {
    return this._fullName;
  }

  // Static
  static hey() {
    console.log(`Hey! 🙋🏻‍♂️🙋🏻‍♂️🙋🏻‍♂️`);
  }
}

const eph = new PersonCl('Ephraim S', 1988);
console.log(eph);
eph.calcAge();
eph.greet();

console.log(eph.fullName);

console.log(eph.age);

const walter = new PersonCl('Walter', 1965);
console.log(walter);

PersonCl.hey();

// Prototypes
console.log(eph instanceof PersonCl);
console.log(eph.__proto__ === PersonCl.prototype);

// Getters and setters in objects
const account = {
  owner: 'Ephraim',
  movements: [200, 530, 120, 300],

  // Getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Setter
  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latest);
account.latest = 566;
console.log(account.latest);
