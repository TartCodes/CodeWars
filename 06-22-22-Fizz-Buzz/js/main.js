


const fizzBuzz = n => {
    //init arr
    let arr = []
    //loop
    for (let i = 1; i <= n; i++) {
    //check if divs by 3 and 5 or 3 or 5
        if(i % 3 === 0 && i % 5 === 0){
             arr.push('FizzBuzz')
        } else if (i % 5 === 0){
             arr.push('Buzz')
        } else if (i % 3 === 0){
             arr.push('Fizz')      
        } else {
            arr.push(i.toString())
        }          
    }
    return arr
}