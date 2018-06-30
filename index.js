function iterativeLog(array) {
  array.forEach(function(element) {
      console.log(`${array.indexOf(element)}: ${element}`);
  });
}

iterate(callback) {
  var array = [1,2,3,4,5,6,7];
  callback(array);
  return array;
}
