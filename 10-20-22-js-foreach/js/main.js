/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   let words = text.toLowerCase().split(' ')
   let arr = []

  words.forEach(e => {
    arr.push(e[0].toUpperCase() + e.slice(1))  
  })
  return arr.join(' ')
}