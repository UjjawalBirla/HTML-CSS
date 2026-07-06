const apikey = "f0cda137cd0ee7096506f3b90526f2cc";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }
  else{
    var data = await response.json();


  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)  + "°c";
  document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
  document.querySelector(".Wind").innerHTML=data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.className = "weather-icon fa-solid fa-cloud";
}
else if (data.weather[0].main == "Clear") {
    weatherIcon.className = "weather-icon fa-solid fa-sun";
}
else if (data.weather[0].main == "Rain") {
    weatherIcon.className = "weather-icon fa-solid fa-cloud-rain";
}
else if (data.weather[0].main == "Drizzle") {
    weatherIcon.className = "weather-icon fa-solid fa-cloud-sun-rain";
}
else if (data.weather[0].main == "Mist") {
    weatherIcon.className = "weather-icon fa-solid fa-smog";
}
  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none";
}
  }
  

searchbtn.addEventListener("click" , ()=>{
    checkWeather(searchbox.value);
})

