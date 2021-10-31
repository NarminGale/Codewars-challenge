function stringy(size) {
  // your code here
  let newStr = ''
  let change = '1'

  for (let i = 0; i < size; i++) {
    if (change === '1') {
      newStr = newStr + '1'
      change = '0'
    } else if (change === '0') {
      newStr = newStr + '0'
      change = '1'
    }
  }
  return newStr
}
