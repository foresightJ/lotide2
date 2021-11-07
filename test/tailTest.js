
"use strict"

const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
// const empty = tail([]);


// assertEqual(result, ['Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
// assertEqual(empty, "");

console.log(result);



