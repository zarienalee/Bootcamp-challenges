function commonCharacters(string1, string2) {
  var stringArr1 = Array.from(new Set([...string1]));
  var stringArr2 = Array.from(new Set([...string2]));

  var common = stringArr1.filter(function (search) {
    return stringArr2.indexOf(search) != -1;
  });

  return common;
}
console.log(commonCharacters("house", "computers"));
