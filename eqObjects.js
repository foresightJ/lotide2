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
    // console.log(el, object1[el]);
    // console.log(`${el} : ${object1[el]}` === `${el} : ${object2[el]}`);
    if (`${el} : ${object1[el]}` === `${el} : ${object2[el]}`) {
      output = true;
      // console.log("true");
    } else {
      output = false;
      // console.log("false");
    }
  }
  return output;
};
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc);
// eqObjects(ab, ba); // => true

// console.log(eqObjects(ab, abc));
// console.log(eqObjects(ab, ba));
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(cd, dc);

// eqArrays(eqObjects(cd, dc));
// eqObjects(cd, dc); // => true

// eqArrays(eqObjects(cd, cd2));
eqObjects(cd, cd2); // => false
