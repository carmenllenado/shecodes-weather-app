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
function updateCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#searchbar");
  let display = document.querySelector("#display");
  display.innerHTML = `${cityInput.value}`;
}
let searchbar = document.querySelector("#city-search");
searchbar.addEventListener("submit", updateCity);