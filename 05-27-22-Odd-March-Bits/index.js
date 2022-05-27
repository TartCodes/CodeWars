// function bitMarch (n) {
// let arr1 = new Array(n).fill(1)
// let mat = []
// //create array and then push into arr
// for (let i = 0 ; i < 9 - n; i++){ //[0,0,0,0,0,0,0,0]
//     let arr2 = new Array(8).fill(0) new Array (8) -> [0,0,0,0,0,0,0,0]
//     //loop through arr2, splice 
//     for (let j = 0; j < arr1.length; j++){
//         arr2.splice()
//     }
//     mat.push(arr2)
// }
// console.log(mat, arr1)
// }


// //n has to = a number if n is 2 that gives two 1s 
// //once n 

function bitMarch (n) {
    console.log("n",n);
    var arr = [];
    for(var i = 7; i >= n-1; i--){
      var result =[0,0,0,0,0,0,0,0];
      for(var j = 0 ; j<n; j++){ // j =  0 i = 7
        result[i-j] = 1;
      }
      arr.push(result);
    }
    return arr;
  }