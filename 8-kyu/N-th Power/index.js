function index(array, n) {
  //your code here
  let number = array[n]
  let nan = -1

  if (number) {
    return Math.pow(number, n)
  } else {
    return nan
  }
}
