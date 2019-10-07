// Challenges
// Write an arrow function that takes in a number and returns whether or not the person is allowed to drink (over 21).
// oldEnough(21)
// expected output -->> "21 is old enough to drink"
// oldEnough(19)
// expected output -->> "19 is not old enough to drink"
const oldEnough = age => {
  if (age >= 21) {
    return `${age} is old eough to drink`
  } else if (age < 21) {
    return `${age} is not old eough to drink`
  }
};

console.log(oldEnough(2));
console.log(oldEnough(21));
console.log(oldEnough(42));

// Write an arrow function named greaterNum that takes two numbers as arguments,
// use string interpolation to return a sentence explaining which number is greater
// (4, -9)
// expected output -->> "4 is greater than -9"
// (0, 278)
// expected output -->> "278 is greater than 0"

const greaterNum = (num1, num2) => {
  return num1 === num2 ? `${num1} is equal to ${num2}` :
    (num1 > num2 ? `${num1} is greather than ${num2}` : `${num2} is greather than ${num1}`)
};

console.log(greaterNum(1, 2));
console.log(greaterNum(12, 2));
console.log(greaterNum(11, 11));

// Consider this object:
var person = {
  firstName: "Alex",
  lastName: "Keaton",
  phone: 123456789,
  getData() {
    return this.firstName+"-"+this.phone
  }
}
// Use object destructuring to create two variables: a name variable and a phone variable
const { firstName, lastName, phone, getData} = person // when using "this" for deconstruction, it wouldn't work
console.log(person.getData());

console.log(getData()); // tip here is to not deconstruct for functions hence why you get undefined-undefined

// Refactor the getData() method to have a more descriptive sentence using string interpolation
var person2 = {
  firstName: "Bob",
  lastName: "Boberston",
  phone: 123456789,
  getData() {
    return `${this.firstName}'s number is  ${this.phone}`;
  }
}

const { firstName1, lastName1, phone1} = person2
console.log(person2.getData());


// Write an arrow function that uses the spread operator to take in a dynamic number of letters as arguments and returns those letters as one word.
const combineLetters = (...chars) => {
  return chars.join("");
};

console.log(combineLetters("1", "2", "3"));
console.log(combineLetters("h", "e", "l", "l", "o", ));
