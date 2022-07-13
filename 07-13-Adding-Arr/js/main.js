// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

// Examples:

// arrAdder([
// ['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']
// ]) // => "Just Live Life Man"

function arrAdder(arr) { 
 
  let stringResult = ''
  for(let i = 0; i < arr[0].length; i++){
    for(let j = 0; j < arr.length; j++){
     stringResult+= arr[j][i]
    } 
    stringResult+= ' '
  }
 return stringResult.trim()
}