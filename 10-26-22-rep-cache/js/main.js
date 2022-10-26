// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => {
  return n * 10
};

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};
//at the end this would like like cache = { 9: 90 } n (which is 9) would have a value of 90


const memoTimes10 = (n) => {
  //check if value was calc
  if(n in cache){    
    return cache[n]
  } else {
    //if not we call our function on n and return it as the result
    let result = times10(n)
    cache[n] = result // saving to cache - this is key:value - cache[n] becomes 9: value is 90
    return result
  }
}


console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached



