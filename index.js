const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(seasons) {
  let season = seasons.find(function(season) {
    return season.result === "W";
  });
  if (season === undefined) {
    return undefined
  } else {
    return season.year;
  }
};