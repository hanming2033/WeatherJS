const weather = new Weather('Boston', 'MA');
const ui = new UI();

//Get weather on Dom load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => ui.paint(results))
    .catch(errrr => console.log(errrr))
}
