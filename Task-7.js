function celciusToFahrenheit(num) {
  var fahrenheit = (num * 9) / 5 + 32;
  return fahrenheit;
}
function fahrenheitToCelcius(num) {
  var celcius = ((num - 32) * 5) / 9;
  return celcius;
}
console.log(celciusToFahrenheit(22));
console.log(fahrenheitToCelcius(50));
