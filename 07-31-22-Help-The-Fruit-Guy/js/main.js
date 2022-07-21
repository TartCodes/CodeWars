// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

// function removeRotten(arr){
//   return arr ? arr.map(x => x.replace('rotten', '').toLowerCase()) : []
// }

// or

function removeRotten(arr){
  let result = []
  if(arr){
    for (let i = 0; i < arr.length; i++){
      let fruits = arr[i]
        if(fruits.slice(0,6) === 'rotten'){
          result.push(fruits.slice(6).toLowerCase())
        } else {
          result.push(fruits)
        }
    }
  }
  return result
}

console.log(removeRotten(['apple', 'rottenPear', 'rottenPlum', 'banana']))