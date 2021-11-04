function digitize(n) {
  //code here
  let numbers = n
    .toString()
    .split('')
    .map((iNum) => parseInt(iNum))

  return numbers.reverse()
}
