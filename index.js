//****************** all functions are invoked at the bottom of the page******************* */

// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(num1, num2) {
  return num1 - num2;
}

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

//3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return null;
  } else {
    return Math.min(...arrayOfNumbers);
  }
}

//4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arrayOfNumbers) {
  let arrayOfEvenNumbers = arrayOfNumbers.filter((item) => {
    return item % 2 === 0;
  });

  return arrayOfEvenNumbers;
}

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(arrayOfNumbers) {
  return arrayOfNumbers.toSorted((a, b) => {
    return b - a;
  });
}

// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
  return str[0].toLowerCase() + str.slice(1);
}

//7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  return str.split("").filter((char) => {
    return vowels.includes(char);
  }).length;
}

//8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(arrayOfNumbers) {
  let sum = arrayOfNumbers.reduce((acc, num) => {
    return acc + num;
  });
  return sum / arrayOfNumbers.length;
}

//******************************all functions called here in console*************************

let arrayOfNumbers = [27, 82, 8, 15, 94, 23, 45, 66];

//1st function called
console.log(
  "1st function returns: the difference between two numbers is " +
    Math.abs(calculateDifference(224, 933))
);

//2nd function called
console.log("2nd function returns: is the given number odd? = " + isOdd(321));

//3rd function called
console.log(
  "3rd function returns: the smallest number from the array is = " +
    findMin(arrayOfNumbers)
);

//4th function called
console.log(
  "4th function returns: the array of even numbers from the given array is " +
    filterEvenNumbers(arrayOfNumbers)
);

//5th function called
console.log(
  "5th function returns: a new array sorted in descending order. " +
    sortArrayDescending(arrayOfNumbers)
);

//6th function called
console.log(
  "6th function: First letter lowercased string : " +
    lowercaseFirstLetter("UpperCased")
);

//7th function called
console.log(
  "7th function returns: the number of vowels is: " +
    countVowels("learn with ostad platform or udemy")
);

//8th function called
console.log(
  "8th function returns: the average is: " + findAverage(arrayOfNumbers)
);
