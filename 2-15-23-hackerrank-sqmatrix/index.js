// // Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// // For example, the square matrix  is shown below:

// // 1 2 3
// // 4 5 6
// // 9 8 9

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x

function diagonalDifference(arr) {
	let first = 0;
	let second = 0;
	arr.map((num, line) => {
		first += num[line];
		second += num.at(-1 - line);
	});
	return Math.abs(first - second);
}
