var findAverage = function (nums) {
  // Code here

  let sum = 0
  let count = 0
  for (let i of nums) {
    sum += i
    count++
  }
  return sum / count
}
