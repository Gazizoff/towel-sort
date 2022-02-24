
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arr =[]
  matrix.map((item,index) => index % 2 ==0 ? item.sort((a,b) => a-b) : item.sort((a,b) => b-a))
  console.log(matrix)
  matrix.map(item => item.map(a => arr.push(a)))
  console.log(arr)
  return arr;
}
