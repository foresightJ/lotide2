"use strict";

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1,2);

const tail = function(arr) {
  if(arr.length === 0) return ""
  return arr.slice(1);
};

module.exports = tail;