// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
// Good luck!

function alternate(n, firstValue, secondValue){
  // your code
  let newArr = []
  for(let i = 0; i < n; i++){
    if(!(i % 2)){
      newArr.push(firstValue)
    } else {
      newArr.push(secondValue)
    }
  }
  return newArr
}

or

const alternate = (n, firstValue, secondValue) => Array.from({length: n}, (_,i) => !(i % 2) ? firstValue : secondValue )