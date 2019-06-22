/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: When in the global scope, the value of "this" will be in the window/console object. 
* 2. Implicit Binding: If you're using a method on the object, then the context of "this" refers to anyting left of the object dot during the method call.
* 3. New Binding: If a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor funtion. 
* 4. Explicit Binding: Using .bind(), .call(), & .apply(), "this" is explicitely defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: 'Hey',
  movieReference: function() {
    console.log('Implicit Binding: ', this);
    return `${this.greeting} you guys!`
  }
}
myObj.movieReference();

// Principle 3

// code example for New Binding
function Person(obj) {
  this.name = obj.name;
  this.age  = obj.age;
  this.speak = function() {
    console.log('New Binding: ', this);
    return `Hey, I'm ${this.name} and I'm ${this.age} years old.`
  }
}
const austin = new Person({ name: 'Austin', age: 33 });
austin.speak();
const emily = new Person({ name: 'Emily', age: 38 });
emily.speak();

// Principle 4

// code example for Explicit Binding
austin.speak.call(emily);
emily.speak.apply(austin);
console.log('Explicit Binding: ', austin.speak.call(emily));
