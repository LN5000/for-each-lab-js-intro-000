function iterativeLog(array) {
  array.forEach(function(element) {
      console.log(`${array.indexOf(element)}: ${element}`);
  });
}
