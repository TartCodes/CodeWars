// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//   let result = []
//   let lower = s.toLowerCase()
//   for(let i = 0; i < split.length; i++){
//     let str = lower[i].toUpperCase()
//       for(let j = 0; j < i; i++){
//         str += lower[i]      
//     }
//     result.push(str)
//   }
// return result.join('-')
// }

or 

function accum(s) {
	return s.split('').map((c,i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-')
}

