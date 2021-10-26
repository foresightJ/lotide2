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
  return arr.slice(1);
};

const empty = [];
const one = [1];
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(empty.length, 1);
assertEqual(one.length, 0);
assertEqual(words.length, 3);