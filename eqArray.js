"use strict";

// assertEqual Function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual TEST CODE

// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1,2);

// eqArray Function

const eqArrays = function(arr1, arr2) {
  if( arr1.length === 0 || arr2.length === 0){
    // console.log('');
      return '';
  }
  if(arr1.length !== arr2.length){
    // console.log('false');
      return false;
  }
  console.log(arr1.every((el, index) => el === arr2[index]));
  return arr1.every((el, index) => el === arr2[index]);
}

// eqArray test Code

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// Assertequal Test code eqArray Function

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);