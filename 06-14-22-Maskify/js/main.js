// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"
function maskify(cc) {
	return cc.split('').map((x,i) => (i < cc.length -4)? x='#':x).join('')
}
console.log(maskify('ahhhhhhhhhhhhhhhhh1234'))

//first we split the param, turning into an array -> then we map to create a new array stating that if i is less than the length of the array - 4, x = # and replace with x (#). Then join

