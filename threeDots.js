
// three dots  add another arry , 
const age = [12, 423, 53, 53, 232, 23,45,];
const age1 = [32, 53,21,452,5,3, 12, 53,];
const allAges = [ ...age, 5, ...age1]
const max = Math.max(...allAges)
console.log(max);