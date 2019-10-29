const testVar = {}

function testFunc() {
  return "hi"
}
let superbowlWin = function(array) {
  let value = array.find( obj => obj.result === "W")
  return !!value ? value.year : undefined
}
 


