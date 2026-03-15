'use strict';

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  calcAge() {
    console.log(
      `I am ${2037 - this.birthYear} years old but as a student I feel more like ${2037 - this.birthYear + 5} years old`,
    );
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new StudentCl('Martha Jonas', 2000, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();
