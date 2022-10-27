//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function(arr) {
  const breadcrumbs = {};
   let result = [arr[0]]

  for(let i = 1; i < arr.length; i++){       
    if(!breadcrumbs[arr[i]]){
       result.push(arr[i])
       breadcrumbs[arr[i]] = true
    }      
  } 
  // console.log(result.sort((a, b) => a - b))
  return result.sort((a, b) => a - b);
 
};

uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]