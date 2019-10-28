const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let result = record.find(function(e){
     return e.result === "W"
  })

  if (result === undefined) {
    return undefined
  } else {
    return result.year;
  }
}