// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

function spongeMeme(sentence) {
	//take sentence, split into an array, loop through the array, alternate upper to lower
	return sentence.split('').map((el,i) => i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('')
  }