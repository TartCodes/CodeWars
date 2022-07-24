// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// P: We're gonna have a string. We sometimes will get numbers or specials. We dont want to change nums or specials. We'll always get english. Should consider what to do if we get empty spaces. Will not count the starting char. 

// R: We want to get a new string that takes in the original string, and pushes out a string with every letter +13 from that letter. "A" -> 'N'. 
// E: below

// P: Write a function that takes in a String.
function rot13(message){
  // Create a place for the out put to rest. ** Always a good idea to create a place for the new string to reat.
  let newS = ''
  // Change the letters in that original string to be 13 plus. 
  let alpha = 
      'abcdefghijklmnopqrstuvwxyzabcdefghijklm'  
  let alpha2 = alpha.toUpperCase()

  // make a for loop to walk through our original string (message), change the character that you find to +13. 

  for (let i = 0; i < message.length; i++){
      console.log( alpha[alpha.indexOf(message[i] )+ 13] ) 
      if(alpha.indexOf(message[i].toLowerCase()) === -1){ // determines if the thing in an index is a special char. Ignores it. 
          newS += message[i]
       continue 
      }
          
     if  (message[i] ==  alpha[alpha.indexOf(message[i])]){

          newS += alpha[alpha.indexOf(message[i])+13];
          continue // "continue" will restart a for loop. The opposite of "break;". Return is, as always the end of code. 
      } 
      newS += alpha2[alpha2.indexOf(message[i])+13]

  }
  return newS
}
  




