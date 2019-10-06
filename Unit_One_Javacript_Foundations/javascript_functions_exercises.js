// Challenges
// Below are exercises in writing functions.
//
// Write a function called marco that returns "polo".
const marco = () => "polo";

console.log(marco());

// Write a function called greeting that takes a name as an argument and returns 'welcome <person's name here>''
const name = "Hisui";
const greeting = () => `Welcome ${name}!`;

console.log(greeting(name));

// Write a function called oddOrEven that takes an number as an argument and returns whether the number is odd or even.
const oddOrEven = num => {
  if (num % 2 === 0) {
    return "even";
  } else if (num % 2 === 1 || num % 2 === -1) {
    return "odd";
  }
};

console.log(oddOrEven(3));
console.log(oddOrEven(4));
console.log(oddOrEven(-12));
console.log(oddOrEven(5));

// Write a function called triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = num => num * 3;

console.log(triple(1));
console.log(triple(12));
console.log(triple(-1));
console.log(triple(0));

// Write a function called multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(3, 2));
console.log(multiply(11, 2));
console.log(multiply(14, 2));

// Write a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
  if (num1 % num2 === 0) {
    return `${num1} is divisible by ${num2}`;
  }
};

console.log(divisibleBy(5, 2));
console.log(divisibleBy(6, 2));
console.log(divisibleBy(4, 2));

// Below are slightly harder challenges.
//
// Remember to write the pseudo code for each function before you write the code!
// What number's bigger?
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Test the function 2 times with different number pairs
const greaterNum = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else if (num1 === num2) {
    return num1;
  }
};

console.log(greaterNum(1,2));
console.log(greaterNum(1,22));
console.log(greaterNum(1,1));

// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Test the function for each of the supported languages
const helloWorld = (language) => {
  if (language == 'spanish') {
    return 'Hola Mundo';
  } else if (language == 'german') {
    return 'Hallo Welt';
  } else if (language == 'en') {
    return 'Hello World';
  } else {
    return 'Hello World';
  }
};

console.log(helloWorld('spanish'));
console.log(helloWorld('english'));
console.log(helloWorld('german'));

// The Grade Assigner
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Test the function for a few different scores.

const assignGrade = grade => {
  if (grade === 100) {
    return 'Perfect Score!';
  } else if (grade < 100 && grade >= 90) {
    return 'A';
  } else if (grade < 90 && grade >= 80) {
    return 'B';
  } else if (grade < 80 && grade >= 70) {
    return 'C';
  } else if (grade < 70 && grade >= 60) {
    return 'D';
  } else if (grade < 60 && grade >= 0) {
    return 'F';
  }  else {
    return 'something went wrong';
  }
};

console.log(assignGrade(72));
console.log(assignGrade(90));
console.log(assignGrade(-1));

// The Pluralizer
// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form of the noun, if necessary.
// pluralizer(5, cat) should return "5 cats" pluralizer(1, dog) should return "1 dog" because the number one does not require a plural noun
const pluralize = (noun, number) => {
  return number > 1 ? `${number} ${noun}s` : `${number} ${noun}`;
};

console.log(pluralize('cat', 1));
console.log(pluralize('duck', 2));
console.log(pluralize('dog', 10));
// Bonus: Make it handle a few collective nouns like "sheep", "geese", "children", "people" and "species".
const nounsObj = {
  'sheep': 'sheep',
  'goose': 'geese',
  'child': 'children',
  'person': 'people',
  'species': 'species'
};

const pluralize2 = (noun, number) => {
  if (number > 1 &&  Object.keys(nounsObj).includes(noun)) {
    return `${number} ${nounsObj[noun]}`;
  } else if (number == 1 &&  Object.keys(nounsObj).includes(noun)) {
    return `${number} ${noun}`;
  }

  return number > 1 ? `${number} ${noun}s` : `${number} ${noun}`;
};

console.log(pluralize2('sheep', 1));
console.log(pluralize2('goose', 2));
console.log(pluralize2('goose', 1));
console.log(pluralize2('child', 10));
console.log(pluralize2('child', 1));
