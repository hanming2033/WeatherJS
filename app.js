const weather = new Weather('Boston', 'MA');

//Get weather on Dom load


function getWeather() {
  weather.getWeather()
    .then(results => console.log(results))
    .catch(errrr => console.log(errrr))
}
