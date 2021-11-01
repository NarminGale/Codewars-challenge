function abbrevName(name) {
  // code away
  let result = ''
  let strings = name.split(' ')

  result = strings[0][0].toUpperCase() + '.' + strings[1][0].toUpperCase()

  return result
}
