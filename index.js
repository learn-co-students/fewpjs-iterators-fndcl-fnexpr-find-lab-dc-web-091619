const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = array.find(obj => obj.result === "W");

  if (result) {
    return result.year
  } else {
    return undefined
  }
}
