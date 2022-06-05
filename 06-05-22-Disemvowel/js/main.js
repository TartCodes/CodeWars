//return an array of strings removing the vowels within 

function disemvowel(str) {
  let vowels = ['a','e','i','o','u']
  return str.split('').filter((el) => vowels.indexOf(el.toLowerCase()) == -1).join('')
}