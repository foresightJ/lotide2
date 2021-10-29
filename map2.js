
"use strict"

const words = ["ground", "control", "to", "major", "tom"];

// const map = function(arr1, callback) {
//  let mapResult = [];

// }

const map = function (arr1, callback) {
  const result =[];

  for (let item of arr1){
    
    // console.log(`item BEFORE:`, item);
    // console.log(`item AFTER`, callback(item));
    // console.log(`---`);
    result.push(callback(item))

  }


  return result
}

const result2 = map(words, word=> word[0]);
console.log(result2);

// const callback = function(word){word[0]}