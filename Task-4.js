function checkThree(val1, val2) {
  var sum = val1 + val2;
  JSON.stringify(sum)
  if (val1 == 3 || val2 == 3 && sum.includes('3')) {
    return true;
  } else {
    return false;
  }
}
console.log(checkThree(13,12)); 
