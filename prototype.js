// function construtor or prototyping
const Person = function(name, year, job) {
  this.name = name;
  this.year = year;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2016 - this.year);
}

const john = new Person('John', 1990, 'teacher');
const jane = new Person('Jane', 1969, 'designer');
const mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// Object.create
// const personProto = {
//   calculateAge: function() {
//     console.log(2016 - this.year);
//   }
// };

// const john = Object.create(personProto);
// john.name = 'John';
// john.year = 1990;
// john.job = 'teacher';

// const jane = Object.create(personProto, {
//   name: { value: 'Jane' },
//   year: { value: 1969 },
//   job: { value: 'designer' }
// });
