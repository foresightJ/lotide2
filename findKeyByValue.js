const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, val) {
  for (const el in obj) {
    if (obj[el] === val) {
      return el;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
);
console.log(
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
);
