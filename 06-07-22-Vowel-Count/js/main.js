// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a','e','i','o','u']
  for (let i = 0; i < str.length; i++){ //iterate through str array looking for vowels
    for (let j = 0; j < vowels.length; j++){ //iterate through vowels
      if(str[i] === vowels[j]){ //if they match
        vowelsCount++ //count
      }
    }
  } 
  
  return vowelsCount;
}

//OR

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a','e','i','o','u']
  for(let letters of str.toString()){
    if(vowels.includes(letters)){
      vowelsCount++
    }
  }
  
  return vowelsCount;
}