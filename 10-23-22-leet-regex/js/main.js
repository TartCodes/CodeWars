// 10. Regular Expression Matching
// Hard
// 9.5K
// 1.5K
// Companies
// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

 

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
 

// Constraints:

// 1 <= s.length <= 20
// 1 <= p.length <= 30
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

//s = string
//p is a pattern

function isMatch(s,p) {
  return new RegExp(`^${p}$`).test(s)
}

//we create a regex with new RegExp() -> then using ^to start at the begin. of the patter, and $ to stop it at the end of the inputed pattern. 
//we then use .test(s) to compare the pattern given to the string given which returns a boolean