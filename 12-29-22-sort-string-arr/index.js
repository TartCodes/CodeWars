// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// function sortByLength(arr) {
//   // Return an array containing the same strings, ordered from shortest to longest
//   return arr.sort((a, b) => a.length - b.length);
// }

let str = "I have no idea what I am GOING TO DO";

const capitalizeEveryOtherLetter = (str) => {
	let newStr = str.toLowerCase().split(" ").join("").split("");
	for (let i = 1; i < newStr.length; i++) {
		if (i % 2 !== 0) {
			newStr[i] = newStr[i].toUpperCase();
		}
	}
	console.log(newStr.toString().split(",").join(""));
};

capitalizeEveryOtherLetter(str);
