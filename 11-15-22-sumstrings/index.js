// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'

function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

//this is a 4kyu....
