"use strict"

const eqArrays = function(arr1, arr2) {
  if( arr1.length === 0 || arr2.length === 0){
    // console.log('');
      return '';
  }
  if(arr1.length !== arr2.length){
    // console.log('false');
      return false;
  }
  const result = arr1.every((el, index) => el === arr2[index])
  console.log(arr1.every((el, index) => el === arr2[index]));
  return result;
}

const assertArraysEqual = function (arr1, arr2){

  if (eqArrays(arr1, arr2)){
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

// eqArrays([1, 2, 3], [1, 2, 3]);
// assertArraysEqual();
assertArraysEqual([1, 2, 4], [1, 2, 3]);
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false