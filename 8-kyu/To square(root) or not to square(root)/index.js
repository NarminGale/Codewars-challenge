function squareOrSquareRoot(array) {
  let number
  let newArr = []
  for (let i of array) {
    number = Math.sqrt(i)
    if (number % 1 === 0) {
      newArr.push(number)
    } else {
      number = Math.pow(i, 2)
      newArr.push(number)
    }
  }
  return newArr
}
