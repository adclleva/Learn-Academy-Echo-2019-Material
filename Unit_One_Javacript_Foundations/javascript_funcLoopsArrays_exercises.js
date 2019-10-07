// Challenges
// DON'T FORGET TO PSEUDO CODE
//
// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10];
// expected output -->> [9, 27, 45, 12, 30]

const multiBy3Arr = array => {
  return array.map(num => {
    return num * 3
  });
};

console.log(multiBy3Arr(testArr1));

// Write a function that takes in an array and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13];
// expected output -->> [-7, 3, 5, 13]

const onlyOdds = array => {
  return array.filter(num => {
    return num % 2 === 1 || num % 2 === -1;
  });
};

console.log(onlyOdds(testArr2));

// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
 var myMessage = "Hello There"
// expected output -->> "HELLO THERE"

const capitalized = string => {
  return string.toUpperCase();
};

console.log(capitalized(myMessage));

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// expected output -->> "nicework"

const onlyLetters = array => {
  return array.filter(element => {
    return typeof element == 'string';
  }).join('');
};

console.log(onlyLetters(comboArr));

// Create a function that returns the highest number
var highestNumArr = [1, 45, 4, 2, 7, 67, -9, 0, 6]
// expected output -->> 67

const highestNumber = array => {
  return Math.max(...array);
};

console.log(highestNumber(highestNumArr));

// Create a function that returns the lowest number
var lowestNumArr = [1, 45, 4, 2, 7, 67, -9, 0, 6]
// expected output -->> -9

const lowestNumber = array => {
  return Math.min(...array);
};

console.log(lowestNumber(highestNumArr));

// Create a function that calculates the sum
var addThese1 = [1, 2, 3, 4]
// expected output -->> 10
var addThese2 = []
// expected output -->> 0

const totalSum = array => {
  return array.length > 0 ? array.reduce((acc, next) => {
    return acc + next;
  }) : [];
};

console.log(totalSum(addThese1));
console.log(totalSum(addThese2));

// Create a function that calculates the mean value
var meanChecker = [1, 2, 3]
// expected output -->> 2

const meanValue = array => {
  return totalSum(array) / array.length;
};

console.log(meanValue(meanChecker));


// Create a function that finds the index of the highest number
var indexHighestNumArr = [1, 4, 2]
// expected output -->> 1

const indexOfHighestNum = array => {
  return array.indexOf(highestNumber(array));
};

console.log(indexOfHighestNum(indexHighestNumArr));

// Create a function that takes in a string and returns only the middle value
var testString1 = "hello"
// expected output -->> "l"
var testString2 = "boogeyman"
// expected output -->> "e"

const middleValue = string => {
  const middle = Math.floor(string.length / 2);

  return string[middle];
};

console.log(middleValue(testString1));
console.log(middleValue(testString2));

// Stretch Challenges
// Palindrome: Create a function that takes in a string and determines whether the string is a palindrome (the same word forward and backwards)
var palStr1 = "racecar"
// expected output -->> "Yes racecar is a palindrome"
var palStr2 = "albatross"
// expected output -->> "No albatross is not a palindrome"

const isPalindrome = string => {
  if (string == string.split("").reverse().join("")) {
    return `Yes ${string} is a palindrome`;
  } else {
    return `No ${string} isn't a palindrome`;
  }
};

console.log(isPalindrome(palStr1));
console.log(isPalindrome(palStr2));

// Vowels Removed: Create a function that takes in a string and returns a new string with all the vowels removed
var fullString1 = "javascript is awesome"
// expected output -->> "jvscrpt s wsm"
var fullString2 = "I am a LEARN student"
// expected output -->> "m LRN stdnt"

const removeVowels = string => {
  return string.replace(/[aeiouAEIOU]/g, '');
};

console.log(removeVowels(fullString1));
console.log(removeVowels(fullString2));

// Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// expected output -->> [3, 7, 10, 5, 4, 8, 2, 1]
const mergeArr = (arr1, arr2) => {
  let uniqueArr = [];

  [...arr1,...arr2].forEach(num => {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  });

  return uniqueArr;
};

console.log(mergeArr(arr1, arr2));

// Clean Function: Create a function that filters false, null, 0 and blank values from an array.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// expected output -->> [58, "abcd", true]

const cleanFunc = array => {
  return array.filter(element => {
    return element && element != " ";
  });
};

console.log(cleanFunc(filterArrayValues));

// Pre-fill: Write a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// fillArray(6, 0)
// expected output -->> [0, 0, 0, 0, 0, 0]
// fillArray(4, 11)
// expected output -->> [11, 11, 11, 11]

const fillArray = (num1, num2) => {
  let arr = [];

  for (i = 0; i < num1; i++) {
    arr.push(num2);
  }

  return arr;
};

console.log(fillArray(6, 0));
console.log(fillArray(4, 11));

// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function. For example,
//if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// 4 ➞ 10
// 13 ➞ 91
// 600 ➞ 180300

const sumUpTo = num => {
  let sum = 0;
  let i = 0;

  while (i <= num) {
    sum += i;
    i++
  }

  return sum;
};

console.log(sumUpTo(4));
console.log(sumUpTo(13));
console.log(sumUpTo(600));



// Super Stretch Challenge
// High/Low Game
// Create an HTML page and link your JavaScript file
// More information about linking HTML to JavaScript here
// Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and asks the user to guess a number HINT: use prompt(), OR <input>
// If the user's guess is too high, the user will be notified
// If the user's guess is too low, the user will be notified
// If the user guesses the secret number correctly, a winning message will be displayed HINT: use alert() OR innerHTML
// STRETCH: If the user has not guessed the secret number in seven tries, a losing message will be displayed
// STRETCH: Add styling to your page and push it to a GitHub repository
