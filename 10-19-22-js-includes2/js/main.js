// Given a string of text, return the number of vowels found within the text
// e.g vowelsCounter('anehizxcv') // will return 3
// */


//using regex
function vowelsCounter(text) {
    let regex = text.match(/[aeiou]/gi)
   if(regex){
    return regex.length //ex. matthew would return an array of ae with a length of 2 meaning 2 matches
   } else {
    return 0
   }
}