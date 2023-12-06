const citiesOnly = (n) => n.map(({city}) => city )
function capitalizeFirstLetterOfEachWord(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}
const upperCasingStates = (cities) => cities.map((city) => capitalizeFirstLetterOfEachWord(city));
function convertFahrenheitToCelsius(fahrenheitStr) {
  let numericPart = fahrenheitStr.slice(0, -2);
  let fahrenheit = parseFloat(numericPart);
  if (isNaN(fahrenheit)) {
    return 0 ;
  }
  let celsius = (fahrenheit - 32) * (5 / 9);
  return Math.floor(celsius.toFixed(2)) + "°C";
}
const fahrenheitToCelsius = (degrees) => {
  if (Array.isArray(degrees)) {
    return degrees.map((degree) => convertFahrenheitToCelsius(degree));
  } else {
    return convertFahrenheitToCelsius(degrees);
  }
};
const trimTemp = (temps) => temps.map((obj) => {
  const trimmedTemperature = obj.temperature.replace(/\s/g, "");
  return { ...obj, temperature: trimmedTemperature };
});
const tempForecasts = (cities) => {
  return cities.map((obj) => {
    const celsiusTemperature = fahrenheitToCelsius(obj.temperature.replace(/\s/g, "")).slice(0,-1);
    const city = capitalizeFirstLetterOfEachWord(obj.city)
    const state = capitalizeFirstLetterOfEachWord(obj.state)
    return `${celsiusTemperature.replace(/\s/g, "")}Celsius in ${city}, ${state}`;
  });
};
