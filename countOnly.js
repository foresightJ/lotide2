"use strict"

"use strict";

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// // TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1,2);

// This function should take in a collection of items and return counts for a specific subset of those items. 

const countOnly = function(allItems, itemsToCount){
  const result = {};
  for (const item of allItems){
    if (itemsToCount[item]){
      if (result[item]){
        result[item] +=1;
      }else result[item] = 1;
    }
    console.log(item);
  }
  console.log(result);
  return result;
}

/*It won't count everything. In order to decide what to count,

it will also be given an idea of which items we care about and 

it will only count those, ignoring the others.

Items in our case will be limited to Strings.*/


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
