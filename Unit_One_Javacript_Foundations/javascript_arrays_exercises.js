// Challenges
// Array Methods Practice
//
// Exercise 1 - Consider this variable:
var groceryList1 = ["chips", "dip", "cookie"]

// Write the code that will add "soda" to the end of the original array.
groceryList1.push("soda")
console.log(groceryList1)

// Exercise 2 - Consider this variable:
var numbers1 = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.
numbers1.unshift(0)
console.log(numbers1);

// Write the code that will add the number 12 to the end of the array.
numbers1.push(12)
console.log(numbers1)

// Write the code that will remove the first number from the array.
numbers1.shift()
console.log(numbers1)

// Exercise 3 - Consider this variable:
var groceryList2 = ["apples", "carrots", "oatmeal"]

// Write the code that will add "granola" to the end of array without altering the original array.
const newGroceryList = [...groceryList2]
newGroceryList.push("granola")

console.log(groceryList2)
console.log(newGroceryList)

// Exercise 4 - Consider this variable:
var numbers2 = [1, 2, 3, 4, 5, 2]

// Write the code that will add the number 0 to the beginning of the array without altering the original array.
// Exercise 5 - Consider this variable: var numbers3 = [2, 13, 6, 8, 4, 2]
var newNumbers = numbers2.slice(0)
newNumbers.unshift(0)

console.log(newNumbers)

// Write the code that finds the index of the first appearance of the number 2.
console.log(numbers2.indexOf(2))

// Write the code that finds the index of the last appearance of the number 2.
console.log(numbers2.lastIndexOf(2))

// Exercise 6 - Consider this variable:
var chars = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the chars array together into a string.
console.log(chars.join(""))

// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.
var charsReversed = chars.reverse()
console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.
var charsReversedHyphened = chars.reverse()
console.log(charsReversedHyphened)

// Write the code that brings all the letters in the charsReversed Array together into a string without separators.
console.log(charsReversedHyphened.join())

// Exercise 7 - Create an array with your siblings names, and an array with your parents names.
var siblings = ["brother", "sister"]
var parents = ['mom','dad']

// Sort your siblings names in alphabetical order.
console.log(siblings.sort())

// Sort your parents names in reverse alphabetical order.
console.log(parents.sort())

// Sort all the names in alphabetical order. Hint: Combine the arrays into a single array.
var family = [...parents, ...siblings]
console.log(family.sort())

// Sort all the names in reverse alphabetical order.
console.log(family.sort().reverse())

// Magic 8 Ball
// Create an array with 6 different (appropriate) Magic 8 Ball answers
// Create a random number to select one of the answers (hint: use Math.random()
// Output the random answer
var randomNum = Math.floor(Math.random() * 6)

const magicBallAnswer = ["yes", "no", "absolutely", "not a chance", "maybe", "who knows"]

console.log(magicBallAnswer[randomNum])

// Stretch goal:
// As a user I can enter a question and get a random answer to my question.
// Create an HTML page linked to the JavaScript file - you will need to research onClick events, document.getElementById() and innerHTML.
// More information about linking HTML to JavaScript here
