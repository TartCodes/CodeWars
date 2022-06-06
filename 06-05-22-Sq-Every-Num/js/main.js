//square every digit within a given number and return that number

function squareDigits(num){
  return parseInt(num.toString().split('').map(num => num * num).join(''))
}

//we are wrapping the whole thing into parseInt to return the solution as a number
//first we turn the numbers into a string so we can split them
//then we create a new array and return the sq rt of each digit using map
//then we simply join the digits letting parseInt turn it back into an integer