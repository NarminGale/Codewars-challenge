function superSize(num) {
  num = num.toString()
  let strings = num.split('')
  let numbers = []
  let numStr = ''
  for (let i of num) {
    numbers.push(parseInt(i))
  }

  for (let i = 0; i < num.length; i++) {
    let maxNum = Math.max(...numbers)
    let index = numbers.indexOf(maxNum)
    numStr += maxNum
    numbers.splice(index, 1)
  }

  return parseInt(numStr)
}
