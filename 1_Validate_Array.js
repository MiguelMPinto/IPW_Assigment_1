
a= 0
function validateArrayElements(arr, elementValidator){
    for (i in arr){
        for ( let j of elementValidator.validators){
            if (j(i)){
             a++
             console.log(a)
            return false
        }
        }
        return true
    };
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