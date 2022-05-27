
//P parameters 2 dimensional matrix consisting of arrays of x's and o's
//R return either the coordinates of X or an empty array (e.g. [0,2] or [])
//E below
/*
// input[i][j]

//P below
*/

// const xMarksTheSpot = (input) => {
//   //loop through input i = 0 j = 0 -> i is the array, j will search within the i array
// let y = []
// let x = 0
// //search each array for x. increment x when x is found.
// input.forEach(e => e.forEach(el=> el.includes('x')? x++ : false))
//   //check x to see if it equals 1, if not return []
//       if(x !== 1){
//         return [] 
//       }  
//       //find where x is. loop through each element of the matrix and then loop through the elements of the matrix's elements (matrix[i][j]) 
//       //return the matrix[i][i]
// input.forEach((e, i) => e.forEach((el,index) => el === 'x' ? y.push(i, index) : false) )
//   console.log(y)
// }

or

  const xMarksTheSpot = (input) => {
    let x = 0
    let y = []
    input.forEach(e => e.forEach(el=> el.includes('x')? x++ : false))
    if(x != 1){
      return []
    }else {
      input.forEach((e,i)=> e.forEach((el,index)=> el.includes('x') ? y.push(i,index) : false))
    }
    console.log(y)
    return y
  }
  
