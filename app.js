const weather = new Weather('Boston', 'MA');

//Get weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => console.log(results))
    .catch(errrr => console.log(errrr))
}
