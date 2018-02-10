class Weather{
  constructor(city, state){
    this.apiKey = '536e6efe91839af1';
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather(){
    const res = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city = city}.json`);
    const resDate = await res.json();
    return resDate.current_observation;
  }

  //Change location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}