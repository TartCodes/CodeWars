// // Minimize Sum Of Array (Array Series #1)
// // 7kyu
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
    const sorted = arr.sort((a,b) => a - b)
    let sum = 0
      for(let i = 0; i < arr.length/2; i++) {
        sum += sorted[i] * sorted[sorted.length-1 - i]
      }
    return sum
  }

  or 

  const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
  
  or
  
  function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  }