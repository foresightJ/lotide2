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
eqObjects();

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (Object.keys(actual).length === 0 || Object.keys(expected).length === 0) {
    return "no key:value";
  }
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  let output;

  for (el in actual) {
    // console.log(`${el} : ${actual[el]} === ${el} : ${expected[el]}`)
    if (`${el} : ${actual[el]}` === `${el} : ${expected[el]}`) {
      console.log(`${actual}`);
      output = `Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`;
    } else {
      output = `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
    }
  }
  return output;
};
assertObjectsEqual();
