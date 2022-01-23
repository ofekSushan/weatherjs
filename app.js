
const ui = new UI();
const weather=new Weather();


if(weather.city==undefined){
  $('#locModal').modal("show");
}
addEventListener('keypress', (event) => {
  if ($('#locModal').is(':visible')  && event.code=='Enter'){
    event.preventDefault();
    GetCity();
  }
})

document.getElementById('w-change-btn').addEventListener('click',GetCity)

function GetCity(){


  const city = document.getElementById('city').value;
  
  weather.changeLocation(city);
  getWeather();

  
   
  
  $('#locModal').modal('hide');


};

function getWeather(){
  weather.getWeather()
    .then(results => {
      if(results.cod=='404'){
        alert('Not A Real City')
        return;
      }

      ui.paint(results);
    })
    .catch(err => console.log(err));
}
