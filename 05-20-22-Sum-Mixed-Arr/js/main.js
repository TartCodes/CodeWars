//Give an array of string and numbers return the sum of the array as if they were all numbers

function sumMixed9(x){
  return x.reduce((a,b) => Number(a) + Number(b), 0)
}

or 

//can do the same with map, creates a new array +a, "+" converting all strings to numbers, then reduce to sum)
function sumMix(x){
  return x.map(a => +a).reduce((p,c) => p + c, 0)
}