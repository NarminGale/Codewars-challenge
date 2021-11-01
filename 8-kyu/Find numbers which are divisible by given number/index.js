function divisibleBy(numbers, divisor) {
  let divisibles = []

  for (let i of numbers) {
    if (i % divisor === 0) {
      divisibles.push(i)
    }
  }

  return divisibles
}
