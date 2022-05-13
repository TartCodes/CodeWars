// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  x = x.toLowerCase()
  const palin = x.split('').reverse().join('')
  return (palin === x) ? true : false
}

//OR

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}