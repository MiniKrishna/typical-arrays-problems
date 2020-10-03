
exports.min = function min (array) {
  if (array != undefined && array.length > 0 ){
    var min = array[0]; 
    for (var i = 0; i < array.length; i++) {
    
        if (min > array[i]) min = array[i]; 
      }
 
    return min;
  }
  return 0;
 
}

exports.max = function max (array) {
  if (array != undefined && array.length > 0){
    var max = array[0]; 
    for (var i = 0; i < array.length; i++) {
    
        if (max < array[i]) max = array[i]; 
      }
 
    return max;
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array != undefined && array.length > 0){
    var length = array.length;
    var sum = 0;
    for (var i = 0; i < length; i++) {
      sum += array[i]; 
    }
    return sum/length;
  }
  return 0;
}
