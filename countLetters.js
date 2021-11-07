"use strict";

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 2);

const mySentence = `How are you`;

const countLetters = function (mySentence) {
  let joinedSentence = mySentence.split(``).join(``);
  let counter = {};

  for (const eachLetter of joinedSentence) {
    if (eachLetter) {
      if (!counter[eachLetter]) {
        counter[eachLetter] = 1;
      } else counter[eachLetter] += 1;
    }
  }
  return counter;
};

console.log(countLetters(`How are you`));
