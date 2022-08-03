function getDivisorsCnt(n){
  let divsor = 1
  for(let i = 1; i <= n/2; i++){
    if(n % i == 0){
     divsor++
    }
  }
  return divsor
}
