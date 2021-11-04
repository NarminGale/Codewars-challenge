function getNumberFromString(s) {
  let arr = []
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let numStr = ''

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i])
  }

  for (let i of arr) {
    if (numbers.includes(i)) {
      numStr += i
    }
  }
  return parseInt(numStr)
}
