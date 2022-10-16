/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/


function capSentence(text) {
  let words = text.toLowerCase().split(' ')
  let wordsArr = words.map(word => {
    return word.replace(word[0], word[0].toUpperCase())
  })

  return wordsArr.join(' ')
}