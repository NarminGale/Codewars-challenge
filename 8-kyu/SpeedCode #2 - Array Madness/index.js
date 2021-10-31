function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  let sumOfSquares = 0
  let sumOfCubes = 0

  for (let i of a) {
    sumOfSquares += i * i
  }

  for (let i of b) {
    sumOfCubes += i * i * i
  }

  console.log(sumOfSquares)
  console.log(sumOfCubes)

  if (sumOfSquares > sumOfCubes) {
    return true
  } else {
    return false
  }
}
