const convertToCelsius = function(fahrenheit) {
  convertedTemperature = ((fahrenheit - 32) * (5 / 9));
  return (Math.round(convertedTemperature * 10) / 10);
};

const convertToFahrenheit = function(celsius) {
  convertedTemperature = (celsius * (9 / 5)) + 32;
  return (Math.round(convertedTemperature * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
