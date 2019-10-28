function superbowlWin(array) {
  let object = array.find( element => element.result === "W")
  if (object) {return object.year}
}
