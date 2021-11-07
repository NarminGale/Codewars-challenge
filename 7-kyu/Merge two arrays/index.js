function mergeArrays(a, b) {
  // your code here
  let lengthOfA = a.length
  let lengthOfB = b.length

  let arr = []

  if (lengthOfA > lengthOfB) {
    for (let i = 0; i < lengthOfA; i++) {
      if (a[i]) {
        arr.push(a[i])
      }

      if (b[i]) {
        arr.push(b[i])
      }
    }
  } else {
    for (let i = 0; i < lengthOfB; i++) {
      if (a[i]) {
        arr.push(a[i])
      }

      if (b[i]) {
        arr.push(b[i])
      }
    }
  }

  return arr
}
