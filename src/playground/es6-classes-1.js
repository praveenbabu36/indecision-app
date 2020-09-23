class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name; // this refers to the class instance
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}`; //use backticks
  }

  getDescription() {
    return `${this.name} is ${this.age} years(s) old.`;
  }
}
//sub class
class Student extends Person {
  constructor(name = "Anonymous", age = 0, major = "Undecided") {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    if (this.major && this.major != "Undecided") {
      return true;
    }
    return false;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` And the major is ${this.major}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name = "Anonymous", age = 0, homeLocation = "Unknown") {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    if (this.homeLocation && this.homeLocation != "Unknown") {
      return true;
    }
    return false;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` And the home location is ${this.homeLocation}`;
    }
    return greeting;
  }
}

/*
const me = new Student("Praveen Babu", 38, "Computer Science");
console.log(me);
console.log(me.getDescription());

const other = new Student();
console.log(other);
console.log(other.getDescription());
*/

const me = new Traveller("Praveen Babu", 38, "Chennai");
console.log(me);
console.log(me.getGreeting());

const other = new Traveller();
console.log(other);
console.log(other.getGreeting());
