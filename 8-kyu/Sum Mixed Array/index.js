function sumMix(x) {
  let sum = 0
  for (let i of x) {
    if (typeof i === 'string') {
      i = parseInt(i)
    }
    sum += i
  }
  return sum
}
