const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return "";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((el, index) => el === arr2[index]);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === 0 || Object.keys(object2).length === 0) {
    return "no key:value";
  }
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let output;
  for (el in object1) {
    if (`${el} : ${object1[el]}` === `${el} : ${object2[el]}`) {
      output = true;
    } else {
      output = false;
    }
  }
  return output;
};
