class LS{
  static writeToLS(city, state){
    localStorage.setItem('state',state);
    localStorage.setItem('city',city);
  }

  static getFromLS(){
    const city = localStorage.getItem('city');
    const state = localStorage.getItem('state');
    return {
      city,
      state
    }
  }
}