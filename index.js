const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
 
]
function superbowlWin(array) {
  function findWin (record){
    return record.result === "W"
  }
  let result = array.find(findWin)
  if (result){
    return result.year
  }
}
