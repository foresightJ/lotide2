"use strict"

const middle = function(array) {
  if(array.length <= 2){
      return []
  }

  const arr = array;
  let output = []
  const half = parseInt((arr.length/2))
  const firstHalf = arr.slice(0, half)
  const secondHalf = arr.slice(-half)
  
  if(arr.length % 2 !== 0){
      output.push(arr[half])
  }else{ 
      output.push(firstHalf[firstHalf.length - 1], secondHalf[0])
  }
  return output
}

// console.log(middle([3,4,57,8,9,0]));
