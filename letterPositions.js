const letterPositions = function (sentence) {
  const results = {};

  // logic to update results here
  const strArr = [...new Set(sentence.split(" ").join(""))];
  console.log(strArr);
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    results[strArr[i]] = [];
    for (let j = 0; j < sentence.length; j++) {
      if (strArr[i] === sentence[j]) {
        results[strArr[i]].push(j);
      }
    }
    count = 0;
  }
  return results;
};

letterPositions("lighthouse in the house");
