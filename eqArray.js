"use strict";

// assertEqual Function

const assertEqual = require('./assertEqual')


// eqArray Function

const eqArrays = function(arr1, arr2) {
  if( arr1.length === 0 || arr2.length === 0){
    
    return '';
  }
  if(arr1.length !== arr2.length){
    
    return false;
  }
  return arr1.every((el, index) => el === arr2[index]);
}

module.exports =eqArrays;