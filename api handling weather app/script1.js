document.addEventListener('DOMContentLoaded', ()=>{
   const cityInput = document.getElementById("city-input");
   const getWeatherBtn = document.getElementById("get-Weather-btn");
   const weatherInfo = document.getElementById("weather-info");
   const cityNameDispaly = document.getElementById("city-name");
   const temperatureDisplay = document.getElementById("temperature");
   const descriptionDisplay = document.getElementById("description");
   const humidityDisplay = document.getElementById("humidity");
   const windSpeedDisplay = document.getElementById("wind");
   const errorMessage = document.getElementById("error-message");
   const noInputMessage =document.getElementById("no-input");
   const API_KEY="6e2d76435a336f2170a70e5efeafe6b3";

   getWeatherBtn.addEventListener("click" , async () => {
   const city = cityInput.value.trim()
   if(!city){ return noInputMessage1();
   
   }

   try {
    const weatherData= await fetchWeatherData(city);
    displayWeatherData(weatherData);
   } catch (error) {
    showError();
   }
 })

   async function fetchWeatherData(city){
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const response= await fetch(url);
  console.log(typeof response);
  console.log( "RESPONSE",response);


  if(!response.ok){
    throw new Error("City not found");

   
  }
 const data= await response.json();
 return data;
  }

  function displayWeatherData(data){
    console.log("DATA",data);
    const {name, main, weather,wind}= data;
    cityNameDispaly.textContent= name;
    temperatureDisplay.textContent=`Temperature in °C: ${main.temp}`;
    descriptionDisplay.textContent=`Weather: ${weather[0].description}`;
    humidityDisplay.textContent=`Humidity in %: ${main.humidity}`;
    windSpeedDisplay.textContent=`Wind Speed in km/h: ${wind.speed}`;
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    noInputMessage.classList.add("hidden");


  }


  function showError(){
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');
    noInputMessage.classList.add('hidden');

  }
function noInputMessage1(){
  weatherInfo.classList.add('hidden');
    errorMessage.classList.add('hidden');
    noInputMessage.classList.remove('hidden');

}

})
