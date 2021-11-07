
"use strict";

const assertEqual = require('./assertEqual')

const tail = function(arr) {
  if(arr.length === 0) return ""
  return arr.slice(1);
};

module.exports = tail;