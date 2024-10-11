
function validateArrayElements(arr, elementValidator) {
  for (i in arr) {
    for (let j of elementValidator.validators) {
      if (!j(arr[i])) {
        return false
      }
    }
  };
  return true
}


// Example1
const elementValidator = {
  validators: [
    (n) => typeof n === 'number' && n > 0,  // checks if number is positive
    (n) => n % 2 === 0                      // checks if number is even
  ],
};


const arr1 = [2, 4, 6];  // all numbers are positive and even
const arr2 = [2, -4, 6]; // contains a negative number
const arr3 = [1, 3, 5];  // contains odd numbers


console.log(validateArrayElements(arr1, elementValidator)); // true
console.log(validateArrayElements(arr2, elementValidator)); // false
console.log(validateArrayElements(arr3, elementValidator)); // false

// Example2

const stringValidator = {
  validators: [
    (str) => typeof str === 'string',      // checks if the element is a string
    (str) => str.length > 3,               // checks if the string has more than 3 characters
  ],
};

const strArr1 = ['hello', 'world', 'test']; // all strings, length > 3
const strArr2 = ['hi', 'ok', 'world'];      // 'hi' and 'ok' have length <= 3
const strArr3 = [123, 'abc', 'def'];        // contains non-string elements

console.log(validateArrayElements(strArr1, stringValidator)); // true
console.log(validateArrayElements(strArr2, stringValidator)); // false
console.log(validateArrayElements(strArr3, stringValidator)); // false


// Example 3
const mixedValidator = {
  validators: [
    (val) => typeof val === 'number',      // checks if the element is a number
    (val) => val >= 10 && val <= 100,      // checks if the number is between 10 and 100
  ],
};

const mixedArr1 = [15, 25, 50, 100];      // all numbers between 10 and 100
const mixedArr2 = [5, 30, 50, 200];       // contains numbers outside the range
const mixedArr3 = [20, 'hello', 50];      // contains non-number elements

console.log(validateArrayElements(mixedArr1, mixedValidator)); // true
console.log(validateArrayElements(mixedArr2, mixedValidator)); // false
console.log(validateArrayElements(mixedArr3, mixedValidator)); // false


const arrayValidator = {
  validators: [
    (val) => Array.isArray(val),
    (val) => val.length >= 2
  ],
};

const arrArr1 = [[1, 2], [3, 4, 5]];
const arrArr2 = [[1], [2, 3], 'not an array'];
const arrArr3 = [[1, 2], [3]];

console.log(validateArrayElements(arrArr1, arrayValidator)); // true
console.log(validateArrayElements(arrArr2, arrayValidator)); // false
console.log(validateArrayElements(arrArr3, arrayValidator)); // false
