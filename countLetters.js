"use strict";

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1,2);

const countLetters = function(mySentence) {
  // mySentence = mySentence.split().join(``);
  let joinedSentence = mySentence.split(``).join(``);
  let counter = {};
  // The function should take in a sentence (as a string) 
  for (const eachLetter of joinedSentence){
    if (eachLetter){
      if (!counter[eachLetter]){
        counter[eachLetter] = 1;
      } else counter[eachLetter] +=1;
    }
  }
  console.log(`type of mySentence:`,typeof mySentence,` mySetence ;`,mySentence);
  return counter;
  //and then return a count of each of the letters in that sentence.
}

const mySentence = `How are you`;
console.log(countLetters(mySentence));

// const mySentence = String(["How", "are", "you"])
// console.log(mySentence);

const joinedSentence = mySentence.split(' ').join('');
console.log(joinedSentence)