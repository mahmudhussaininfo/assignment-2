// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

const calculateSum = (a, b) => {
  return a + b;
};
console.log(calculateSum(4, 4));

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

const isEven = (even) => {
  return even % 2 === 0;
};
console.log(isEven(2));
console.log(isEven(3));

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

const findMax = (num) => {
  let largest = num[0];

  for (let i = 0; i < num.length; i++) {
    if (largest < num[i]) {
      largest = num[i];
    }
  }
  return largest;
};

let result = [0, 1, 200, 3, 20, 660, -40, 90, 500];
console.log(findMax(result));

/**
 * 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
 */

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
let main = "mahmud";
let res = reverseString(main);
console.log(res);

/**
 * 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
 */

const filterOddNumbers = (num) => {
  let newArray = [];
  num.filter((newnumber) => {
    if (newnumber % 2 !== 0) {
      newArray.push(newnumber);
    }
  });
  return newArray;
};
let odd = [1, 2, 3, 7, 50, 80, 17, 40];
console.log(filterOddNumbers(odd));

/**
 * 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
 */

const sumArray = (number) => {
  let result = number.reduce((a, b) => {
    return a + b;
  }, 0);
  return result;
};

let mamu = [1, 2, 3, 4, 5, 6, 10];
console.log(sumArray(mamu));

/**
 * 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
 */

const sortArray = (num) => {
  let newArray = num.sort((a, b) => {
    return a - b;
  });

  return newArray;
};

let ascendingOrder = [10, 20, 8, 3, 1, 2];
console.log(sortArray(ascendingOrder));

/**
 * 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
 */

const capitalizeFirstLetter = (letter) => {
  let first = letter.charAt(0).toUpperCase();
  let rest = letter.slice(1);
  return first + rest;
};
let capital = "mahmud";
console.log(capitalizeFirstLetter(capital));
