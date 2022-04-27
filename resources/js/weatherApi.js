/* variables */
const apiKey = "05c3dc2ee4be01213995071eec5b9bcc";
const baseUrlWeather = "http://api.openweathermap.org/data/2.5/weather?";
const inputField = document.getElementById('input-field');
const searchBtn = document.getElementById('search-icon');
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let condition = document.getElementById("condition");
let fetched = false;


/* function definition */
const fetchWeather = () => {
    let citySearched = null;
    let tempSearched = null;
    let conditionsSearched = null;

    fetch(baseUrlWeather
        + 'q=' + inputField.value
        + '&appid=' + apiKey
        + '&units=metric&lang=de'
        )
        .then((response) => (response.json()))
        .then((data) => {
            citySearched = data.name;
            tempSearched = Math.ceil(data.main.temp);
            conditionsSearched = data.weather[0].description;

            insertInfos(citySearched, tempSearched, conditionsSearched);
            inputField.value = "";
        })
}

const insertInfos = (citySearched, tempSearched, conditionsSearched) => {
    city.innerText = citySearched;
    temp.innerText = tempSearched + "°C";
    condition.innerText = conditionsSearched;
}

const searchWeatherEnter = (event) => {
    if (event.key == "Enter") {
      fetchWeather();
    }
  }


if (!fetched) {
    fetch(baseUrlWeather
        + 'q=Berlin'
        + '&appid=' + apiKey
        + '&units=metric&lang=de'
        )
        .then((response) => (response.json()))
        .then((data) => {
            citySearched = data.name;
            tempSearched = Math.ceil(data.main.temp);
            conditionsSearched = data.weather[0].description;

            insertInfos(citySearched, tempSearched, conditionsSearched);
        })
  }
/* function calls */
inputField.addEventListener('keyup', searchWeatherEnter);
searchBtn.addEventListener('click', fetchWeather);