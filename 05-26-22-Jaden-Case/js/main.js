// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"










String.prototype.toJadenCase = function () {
  //had to look it up mostly, however
  //this refers to the prototype -> string so we can use split 
  //then we map to create a new array
  //upcase the first index(letter), then + slice(1) to concat the 1st index to the 0index
  //then join them together giving us the answer
  return this.split(' ').map((el) => el[0].toUpperCase() + el.slice(1)).join(' ')
  }