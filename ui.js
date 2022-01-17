class UI {
    constructor() {
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feels-like');
      this.dewpoint= document.getElementById('w-dewpoint');
    }
  
    paint(weatherr){
      
    

    if(weatherr.sys['country']=='IL'){
      const oldtext= weatherr.sys['country'];
     const newtext= oldtext.replace('IL','Israel')
     this.location.textContent = newtext;
    }
    else
    {
      this.location.textContent = weatherr.sys['country'];
    }
    this.desc.textContent =weatherr.name;
    this.string.textContent = weather.temperature_string;
    var icon_id=weatherr.weather[0]['icon'];
    var icon_url="http://openweathermap.org/img/w/" + icon_id + ".png";
    this.icon.setAttribute('src',icon_url);
    this.humidity.textContent = `Description:  ${weatherr.weather[0]['description']}`;
    this.string.textContent = `Temperature:  ${Math.floor(weatherr.main['temp']-272.15) +"°C"} (${Math.floor(weatherr.main['temp']*9/5 - 459.67) +"°F)"}`;
   
    this.dewpoint.textContent = `Time: ${weatherr.timezone / 3600}:00 `;
    this.feelsLike.textContent = `Wind Speed ${weatherr.wind['speed']}`;

 const date=new Date;
 date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
 date.setSeconds(date.getSeconds()+weatherr.timezone);
 this.dewpoint.textContent = `Time: ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} `;

  }
}
     
   