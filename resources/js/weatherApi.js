/* variables */
const apiKey = "05c3dc2ee4be01213995071eec5b9bcc";
const baseUrlWeather = "http://api.openweathermap.org/data/2.5/weather?";
const currPositionWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
const inputField = document.getElementById('input-field');
const searchBtn = document.getElementById('search-icon');
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let condition = document.getElementById("condition");
let fetched = false;
let executed = false;


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

  const setInfo = (citySearched, tempSearched, conditionsSearched) => {

    insertInfos(citySearched, tempSearched, conditionsSearched);
  }

  const getLocation = () => {
    if ("geolocation" in navigator) {
        navigator.permissions.query({ name: 'geolocation' })
        .then((permission) => {
            if (permission.state != "denied") {
                navigator.geolocation.getCurrentPosition(function(position) {
                    setPosition(position.coords.latitude, position.coords.longitude)
                    })      
            } else {
                fetch(baseUrlWeather
                    + 'q=Berlin'
                    + '&appid=' + apiKey
                    + '&units=metric&lang=de'
                    )
                    .then((response) => (response.json()))
                    .then((data) => {
                        setInfo(data.name, Math.ceil(data.main.temp), data.weather[0].description)
                    })
            }
        })
    }
}

const setPosition = (lat, long) => {
    fetch(
        currPositionWeatherUrl
        + "lat=" + lat
        + "&lon=" + long
        + '&appid=' + apiKey
        + '&units=metric&lang=de'
        )
        .then(response => response.json())
        .then(data => {

            setInfo(data.name, Math.ceil(data.main.temp), data.weather[0].description);
        })
}

/* function calls */
window.addEventListener('load', getLocation);
inputField.addEventListener('keyup', searchWeatherEnter);
searchBtn.addEventListener('load', fetchWeather);