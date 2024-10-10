
function copyValidArrayElements(arr, elementValidators) {
    var newarr = [];

    for (let i in elementValidators) {
        var filteredArr = arr;

        for (let j in arr) {
            for (let validator of elementValidators[i].validators) {
                if (!validator(arr[j])) {
                    filteredArr = filteredArr.filter(element => element !== arr[j]);
                }
            }
        }

        if (filteredArr.length > 1) {
            for (let k in filteredArr) {
                newarr.push(filteredArr[k]);
            }
        } else if (filteredArr.length === 1) {
            newarr.push(filteredArr[0]);
        }
    }

    return newarr;
}



//Exemple 1
const elementValidators = [
    {
        validators: [s => typeof s === 'string' && s.length > 2, s => s[0] === 'a']
    },
    {
        validators: [s => Number.isInteger(s)]
    }
];

const arr1 = ["a"];
const arr2 = [123];
const arr3 = ["abc", 123];
console.log(copyValidArrayElements(arr1, elementValidators)); // []
console.log(copyValidArrayElements(arr2, elementValidators)); // [123]
console.log(copyValidArrayElements(arr3, elementValidators)); // ["abc", 123]
