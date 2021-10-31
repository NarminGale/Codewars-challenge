function countBy(x, n) {
  let z = []
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum = sum + x
    z.push(sum)
  }
  return z
}
