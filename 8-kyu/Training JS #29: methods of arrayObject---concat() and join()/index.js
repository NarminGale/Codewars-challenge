function bigToSmall(arr) {
  //coding here...
  const result = [].concat(...arr)

  result.sort((a, b) => b - a)

  result.join('>')

  return result.join('>')
}
