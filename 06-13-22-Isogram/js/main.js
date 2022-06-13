// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


// function isIsogram(str){
//   return str.toLowerCase().split('').every((el, i) => str.indexOf(el) === i)
// }
//not sure why this one didnt work

function isIsogram(str){
	return str.toLowerCase().split('').filter((el, i, arr) => arr.indexOf(el) === i).length === str.length
  }
  
  //setting str to lower case, spliting the string, using filter to compare remove duplicates, then compare the legnths. if the length changes
  //it means it is not an isogram