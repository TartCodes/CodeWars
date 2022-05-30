// Complete the function which takes two arguments and returns 
//all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

function divisibleBy(numbers, divisor){
  return numbers.filter(nums => nums % divisor === 0)
}

//p two params, 1 an array of numbers, the other a single interger
//r return numbers that are divisible by divisor 
//e 1 2 3 4 5 6 -> 2 -> 2 4 6
//p take the aray of numbers and test if they are divis by a given number, return those 