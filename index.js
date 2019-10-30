

function superbowlWin(array){
  let records = array.find(function(record){
    return record.result === "W"
  });

  if( records === undefined ) {
    return undefined
  }else{
    return records.year
  }

}


