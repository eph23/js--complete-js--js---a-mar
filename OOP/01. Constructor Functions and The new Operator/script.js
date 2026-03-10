'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const eph = new Person('Ephraim', 1988);
console.log(eph);

const matilda = new Person('Matilda', 2017);
console.log(matilda);

const jack = new Person('Jack', 1975);
console.log(jack);

console.log(eph instanceof Person);
