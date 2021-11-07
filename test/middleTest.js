"use strict";

const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("it returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("it returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("it returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("it returns [2, 3] for [1, 2, 3,4]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});
