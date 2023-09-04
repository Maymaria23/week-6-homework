let now = new Date();
let h2 = document.querySelector("h2");
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
h2.innerHTML = `${day}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  changeCity.innerHTML = input.value;
  searchCity(input.value);
}

let input = document.querySelector("#search-place");
let changeCity = document.querySelector("#city");
let submitForm = document.querySelector("form");

submitForm.addEventListener("submit", search);

function showWeather(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `${temperature}`;
}

function searchCity(city) {
  let apiKey = "a9d53981cf45a71c7dafc69c25efbded";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}
