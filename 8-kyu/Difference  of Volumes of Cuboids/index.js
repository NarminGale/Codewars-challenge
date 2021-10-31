function findDifference(a, b) {
  //loading...
  let volumeOfFirst = 1
  let volumeOfSecond = 1
  let result
  for (let i of a) {
    volumeOfFirst *= i
  }

  for (let i of b) {
    volumeOfSecond *= i
  }

  if (volumeOfFirst > volumeOfSecond) {
    result = volumeOfFirst - volumeOfSecond
  } else if (volumeOfSecond > volumeOfFirst) {
    result = volumeOfSecond - volumeOfFirst
  } else {
    result = 0
  }
  return result
}
