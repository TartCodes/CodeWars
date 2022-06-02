//Find the mean (average) on a given array

let average = nums => {
  return nums.reduce((pv,cv) => pv + cv, 0) / nums.length
}