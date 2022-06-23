
// Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

// For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n, m]

// The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100. The Fizz and Buzz numbers might be equal, and might be equal to 1.

// Examples
// Classic FizzBuzz; multiples of 3 are replaced by Fizz, multiples of 5 are replaced by Buzz:
// [1, 2, "Fizz", 4, "Buzz", 6]  ==>  [3, 5] 
// Multiples of 2 are replaced by Fizz, multiples of 3 are replaced by Buzz:
// [1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]  ==>  [2, 3]
// Multiples of 2 are replaced by Fizz and Buzz:
// [1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]  ==>  [2, 2]
// Fizz = 1, Buzz = 6:
// ["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]  ==>  [1, 6]

function reverseFizzBuzz(array){
    let newArray = [];
    if(array.indexOf("Fizz") > -1){ //if its -1 that means that there is no fizz located in that index
       newArray.push(array.indexOf("Fizz") + 1); //if it is > then we push index + 1 (for the correct element)
    } else {
      newArray.push(array.indexOf("FizzBuzz") + 1);
    }
    if(array.indexOf("Buzz") > -1){
      newArray.push(array.indexOf("Buzz") + 1)
    } else {
      newArray.push(array.indexOf("FizzBuzz") + 1);
    }
    return newArray;
  }
  
  //p an array of numbers and strings 
  //r return the numbers which are being replaced by fizz and buzz
  //e see left
  //p decalre new arr to push the found numbers, 
  //check to see if the given array numbers are divisble by either even or odd? then push to new array depending?
  //1 index