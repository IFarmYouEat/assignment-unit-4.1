console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(person) {
  let greeting = "Hello, "+ person + '!';
  return greeting;
}

// Remember to call the function to test
console.log(helloName('Brock'))

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log(addNumbers(3,5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}

console.log(multiplyThree(5,7,10));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    console.log("The number is positive.");
    return true;
  }else{
    console.log("The number is zero or negative.")
    return false;
  } 
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
    if(array.length === 0){
      return 'undefined';
    }else{
      return array[array.length - 1];
    }
}

let sample = ['Shoe', 'Cat', 'Lamp']

console.log(getLast(sample))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for(let i = 0; i < array.length; i++ ){
      if(array[i] === value){
        return true;
        }
  }
  return false;
}

let sampleTwo = [3, 7, 10, 11, 2]
console.log(find(3,sampleTwo))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
    stringSplit = string.split("");
    console.log(stringSplit);
    if(letter === stringSplit[0]){
      return true;
    }
    return false;
}


// 9. Function to return the sum of all numbers in an array
let sampleThree = [8, 9, 15, -9, -11, 0, 33, 27, 91];

function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for(let item of array){
    sum += item;
  }
  // TODO: return the sum
  return sum;
}

console.log(sumAll(sampleThree));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let tempArray = [];
      for( let item of array){
        if(item > 0){
          tempArray.push(item);
        }
      }
      return tempArray;
}

console.log(allPositive(sampleThree));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// Your are counting points for a basketball game, given the amount of 2-pointers scored
// and the amount of 3-pointers scored, find the final points for the team and return that value.

function points(twoPointers, threePointers){
  let totalScore = 0
  totalScore += twoPointers * 2;
  totalScore += threePointers * 3;
  return totalScore;
}

console.log(points(15,3))

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
