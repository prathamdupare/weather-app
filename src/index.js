console.log("hey");

import { createUI } from "./design";
// import { getWeather } from "./api";

export async function getWeather(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "03f5fbe969msh043c25856eb57b7p1b3303jsnacb8943f62fd",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const cloud_pct = document.querySelector("#cloud-pc");
  const feels_like = document.querySelector("#feels-like");
  const humidity = document.querySelector("#humidity");
  const max_temp = document.querySelector("#max-temp");
  const min_temp = document.querySelector("#min-temp");
  const sunrise = document.querySelector("#sunrise");
  const sunset = document.querySelector("#sunset");
  const temp = document.querySelector("#temperature");
  const wind_degrees = document.querySelector("#wind-degrees");
  const wind_speed = document.querySelector("#wind-speed");

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
    console.log(result.cloud_pct);

    const tempText = document.createTextNode(`Temperature: ${result.temp}`);
    temp.appendChild(tempText);

    const cloudPctText = document.createTextNode(
      `Cloud pct: ${result.cloud_pct}`
    );
    cloud_pct.appendChild(cloudPctText);

    const feelsLikeText = document.createTextNode(
      `Feels Like: ${result.feels_like}`
    );
    feels_like.appendChild(feelsLikeText);

    const humidityText = document.createTextNode(
      `Humidity: ${result.humidity}`
    );
    humidity.appendChild(humidityText);

    const maxTempText = document.createTextNode(
      `Max Temperature: ${result.max_temp}`
    );
    max_temp.appendChild(maxTempText);

    const minTempText = document.createTextNode(
      `Min Temperature: ${result.min_temp}`
    );
    min_temp.appendChild(minTempText);

    // Convert the timestamps to JavaScript Date objects
    const sunriseTimestamp = `${result.sunrise}` * 1000; // Convert to milliseconds
    const sunsetTimestamp = `${result.sunset}` * 1000; // Convert to milliseconds

    const sunriseDate = new Date(sunriseTimestamp);
    const sunsetDate = new Date(sunsetTimestamp);

    // Format the date and time as a string
    const sunriseString = sunriseDate.toLocaleTimeString();
    const sunsetString = sunsetDate.toLocaleTimeString();

    console.log("Sunrise:", sunriseString);
    console.log("Sunset:", sunsetString);

    const sunriseText = document.createTextNode(`Sunrise: ${sunriseString}`);
    sunrise.appendChild(sunriseText);

    const sunsetText = document.createTextNode(`Sunset: ${sunsetString}`);
    sunset.appendChild(sunsetText);

    const windDegreesText = document.createTextNode(
      `Wind Degrees: ${result.wind_degrees}`
    );
    wind_degrees.appendChild(windDegreesText);

    const windSpeedText = document.createTextNode(
      `Wind Speed: ${result.wind_speed}`
    );
    wind_speed.appendChild(windSpeedText);
  } catch (error) {
    console.error(error);
  }
}

createUI();

function getCityWeather() {
  const cityInput = document.querySelector("#city-input");
  const city = cityInput.value;

  // const city = "Mumbai"; // Set the city here
  getWeather(city);
  cityInput.value = "";

  const startDisp = document.querySelector(".start-display");
  startDisp.classList.add("hidden");
  const weatherDisp = document.querySelector(".weather-display");
  weatherDisp.classList.remove("hidden");
}

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", getCityWeather); // Remove parentheses here
