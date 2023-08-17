//Feature 1: Time
let now = new Date();
console.log(now);

let daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let hours = now.getHours();
if (hours < 10 ) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10 ) {
  minutes = `0${minutes}`;
}

let fullTime = `${hours}:${minutes}`;
let currentDay = daysOfTheWeek[now.getDay()];

let getDate = document.querySelector("#date-time");
getDate.innerHTML = `${currentDay}, ${fullTime}`;

//Feature 2: Search engine [Now with weather API]
function cityResult(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#searchbar");
  let display = document.querySelector("#display");
  display.innerHTML = `${cityInput.value}`;

  let cityName = `${cityInput.value}`;
  let apiKey = `535cacbb3f8a0df0aeb4790235b9541f`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;

  function updateTemp(response) {
    let tempDisplay = document.querySelector("#temp-display");
    tempDisplay.innerHTML = `${Math.round(response.data.main.temp)}ºC`;

    let prediction = document.querySelector("#prediction");
    prediction.innerHTML = `${response.data.weather[0].description}`;

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

    let wind = document.querySelector("#wind");
    wind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
  }
  axios
    .get(`${apiUrl}q=${cityName}&appid=${apiKey}&units=metric`)
    .then(updateTemp);
}

let searchbar = document.querySelector("#city-search");
searchbar.addEventListener("submit", cityResult);
