// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

function timeConversion(s) {
	// Write your code here

	let afternoon = s.includes("PM");
	let newAfternoon;
	let hour;
	let minutes;
	let seconds;
	let morning = s.includes("AM");
	let newMorning;

	if (afternoon) {
		let time = s.replace("PM", "").split(":");
		if (time[0] === "12") {
			hour = "12";
		} else {
			hour = parseInt(time[0]) + 12;
		}
		minutes = time[1];
		seconds = time[2];
		return (newAfternoon = `${hour}:${minutes}:${seconds}`);
	}
	if (morning) {
		let time = s.replace("AM", "").split(":");
		if (time[0] === "12") {
			time[0] = "00";
		}
		newMorning = time.join(":");
		return newMorning;
	}
}
