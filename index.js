function iterativeLog(array) {
  array.forEach(function(element) {
      console.log(`${array.indexOf(element)}: ${element}`);
  });
}

iterate(callback) {
  var internal = [1,2,3,4,5,6,7];
  callback(internal);
  return internal;
}