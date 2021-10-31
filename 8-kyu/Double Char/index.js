function doubleChar(str) {
  // Your code here
  let newStr = ''
  // Your code here
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < 2; j++) {
      newStr = newStr + str[i]
    }
  }
  return newStr
}
