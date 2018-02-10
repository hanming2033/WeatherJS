class Weather {
  constructor() {
    this.apiKey = '536e6efe91839af1';
    const location = LS.getFromLS();
    this.city = location.city;
    this.state = location.state;
  }

  //Fetch weather from API
  async getWeather() {
    const res = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
    const resDate = await res.json();
    return resDate.current_observation;
  }
}