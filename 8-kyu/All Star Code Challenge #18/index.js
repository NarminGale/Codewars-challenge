function strCount(str, letter) {
  //code here
  let count = 0
  for (let i of str) {
    if (i === letter) {
      count++
    }
  }
  return count
}
