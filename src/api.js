export async function getWeather(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "03f5fbe969msh043c25856eb57b7p1b3303jsnacb8943f62fd",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const cloud_pct = document.querySelector("#cloud-pct");
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
    console.log(result.cloud_pct); // Check if cloud_pc element is correctly selected

    cloud_pct.innerHTML = `Cloud pct: ${result.cloud_pct}`;
    feels_like.innerHTML = `Feels Like: ${result.feels_like}`;
    humidity.innerHTML = `Humidity: ${result.humidity}`;
    max_temp.innerHTML = `Max Temperature: ${result.max_temp}`;
    min_temp.innerHTML = `Min Temperature: ${result.min_temp}`;
    sunrise.innerHTML = `Sunrise: ${result.sunrise}`;
    sunset.innerHTML = `Sunset: ${result.sunset}`;
    temp.innerHTML = `Temperature: ${result.temp}`;
    wind_degrees.innerHTML = `Wind Degrees: ${result.wind_degrees}`;
    wind_speed.innerHTML = `Wind Speed: ${result.wind_speed}`;
  } catch (error) {
    console.error(error);
  }
}
