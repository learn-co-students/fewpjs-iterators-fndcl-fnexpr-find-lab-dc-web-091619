const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => { 
  let season = array.find(record => record.result === "W");
  if (!!season) {return season.year};
};


