// code solution
/**? */

const eqArrays = function (arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return "";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((el, index) => el === arr2[index]);
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function (source, itemsToRemove) {
  const arr = source;
  const remove = itemsToRemove;
  for (let i = 0; i < remove.length; i++) {
    const num = arr.find((el, index) => {
      if (el === remove[i]) {
        arr.splice(index, 1);
      }
    });
  }
  return arr;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
