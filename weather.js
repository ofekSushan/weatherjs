class Weather {
  constructor(city) {
    this.apiKey = 'c64717da2e54c02b12bbc340bb5f748f';
    this.city = city;
    
  }

  
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);


    const responseData = await response.json();


    return responseData
    
    
  
  }

  
  changeLocation(city) {
    this.city = city;
    
  }
}