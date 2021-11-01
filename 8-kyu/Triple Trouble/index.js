function tripleTrouble(one, two, three) {
  //Solution
  let newStr = ''
  for (let i = 0; i < one.length; i++) {
    newStr += one[i] + two[i] + three[i]
  }

  return newStr
}
