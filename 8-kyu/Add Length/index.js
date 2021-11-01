function addLength(str) {
  //start-here
  let strings = str.split(' ')

  let count = 0
  let arr = []
  let strNum = ''

  for (let i of strings) {
    strNum += i + ' ' + i.length
    arr.push(strNum)
    strNum = ''
  }

  return arr
}
