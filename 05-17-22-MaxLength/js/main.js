// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  str = str.split(' ')
  let long = 0
  
  for(let i = 0; i < str.length; i++){   
    if(str[i].length > long){     
      long = str[i].length
    } 
  }
  return long
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");