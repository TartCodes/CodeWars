// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100



function validParentheses(parens) {
  let openParens = 0
  for(let i = 0; i < parens.length; i++){
    if(openParens == -1){
        return false
    } else if(parens[0] === ')'){ 
        return false
    } else if (parens.slice(-1) === '(') {
        return false;
    } else if (parens[i] === '('){
        openParens++         
    } else if (parens[i] === ')'){
        openParens--
      } //I love you , big boy!!! 
    }
  return openParens == 0
  }

//We don't get got... We go get!! LET'S GOOOOOO!!!!!