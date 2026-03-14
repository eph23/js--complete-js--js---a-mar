'use strict';

const personProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  //   Better approach to add properties
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(personProto);

steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven);
steven.calcAge();

// prototype
console.log(steven.__proto__);
console.log(steven.__proto__.__proto__);
console.log(steven.__proto__ === personProto);

//   Better approach to add properties
const sarah = Object.create(personProto);
sarah.init('Sarah', 1979);
console.log(sarah);
sarah.calcAge();
