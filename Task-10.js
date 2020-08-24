function vowelCheck(string) {
  var vowelArray = [];
  var vowelCheck = "AaEeIiOoUu";
  for (var i = 0; i < string.length; i++) {
    for (v = 0; v < vowelCheck.length; v++) {
      if (string[i] == vowelCheck[v]) {
        vowelArray.push(string[i]);
      }
    }
  }
  return vowelArray;
}
console.log(vowelCheck("zariena"));
