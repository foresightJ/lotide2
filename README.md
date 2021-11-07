# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @foresightj/lotide`

**Require it:**

`const _ = require('@foresightj/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(tail)`: returns an array without the first element in the original array
- `function2(head)`: returns the first element in an array
- `function3(middle)`: returns the middle element of an array, it returns and array with the two element if the length of the original array is an even number
