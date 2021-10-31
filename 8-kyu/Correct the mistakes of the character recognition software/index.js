function correct(string) {
  // your code here
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '5') {
      string = string.replace('5', 'S')
    } else if (string[i] === '0') {
      string = string.replace('0', 'O')
    } else if (string[i] === '1') {
      string = string.replace('1', 'I')
    }
  }

  return string
}
