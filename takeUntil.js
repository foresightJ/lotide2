const eqArrays = function (arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return "";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((el, index) => el === arr2[index]);
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const takeUntil = function (array, callback) {
  for (el in array) {
    if (callback(array[el])) {
      return array.slice(0, el);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1); //[ 1, 2, 5, 7, 2 ]

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2); //[ 'I\'ve', 'been', 'to', 'Hollywood' ]
