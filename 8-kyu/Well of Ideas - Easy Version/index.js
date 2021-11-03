function well(x) {
  let count = 0
  for (let i of x) {
    if (i === 'good') {
      count++
    }
  }

  if (count === 0) {
    return 'Fail!'
  }
  if (count > 0 && count <= 2) {
    return 'Publish!'
  }
  if (count > 2) {
    return 'I smell a series!'
  }
}
