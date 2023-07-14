const inputBox = document.querySelector('.input-box');
const search = document.getElementById('search');
const wether_img = document.querySelector('.wether-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

const wetherImg = document.querySelector(".wether-img");

async function checkWeather(city){
  const api_key ="1f820bb5f189afaeb013d38354603f64"; 
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then(response => response.json());

  if (weather_data.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    return
  }

  location_not_found.style.display = "none";
  weather_body.style.display = "flex";
  temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${ Math.round(weather_data.main.humidity)}%`;
  wind_speed.innerHTML = `${ Math.round (weather_data.wind.speed)}Km/h`;

  if (weather_data.weather[0].main == "Clouds") {
    wetherImg.src = "images/clouds.png";
  }
  else if (weather_data.weather[0].main == "Clear") {
    wetherImg.src = "images/clear.png";
  }
  else if (weather_data.weather[0].main == "Rain") {
    wetherImg.src = "images/rain.png";
  }
  else if (weather_data.weather[0].main == "Drizzle") {
    wetherImg.src = "images/drizzle.png";
  }
  else if (weather_data.weather[0].main == "Mist") {
    wetherImg.src = "images/mist.png";
  }

  else if (weather_data.weather[0].main == "Snow") {
    wetherImg.src = "images/snow.png";
  }

  else if (weather_data.weather[0].main == "Thunderstorm") {
    wetherImg.src = "images/thunderstorm.png";
  }

  else if (weather_data.weather[0].main == "HeavySnow") {
    wetherImg.src = "images/heavy snow.png";
  }
  else if (weather_data.weather[0].main == "Haze") {
    wetherImg.src = "images/haze.png";
  }
}
search.addEventListener('click', ()=>{
      checkWeather(inputBox.value)
});