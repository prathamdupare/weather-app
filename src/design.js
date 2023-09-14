export function createUI() {
  const weatherAppContainer = document.getElementById("weatherApp");

  // Create the header
  const weatherHeader = document.createElement("div");
  weatherHeader.classList.add("weather-header");
  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "WeatherMate";
  weatherHeader.appendChild(headerTitle);

  // Create the content container
  const weatherContent = document.createElement("div");
  weatherContent.classList.add("weather-content");

  // Create the search input and button
  const weatherSearch = document.createElement("div");
  weatherSearch.classList.add("weather-search");
  const cityInput = document.createElement("input");
  cityInput.setAttribute("type", "text");

  cityInput.setAttribute("placeholder", "Enter city");
  cityInput.setAttribute("id", "city-input");

  const searchButton = document.createElement("button");
  searchButton.textContent = "Search";
  searchButton.classList.add("search-button");
  weatherSearch.appendChild(cityInput);
  weatherSearch.appendChild(searchButton);

  const cityName = document.createElement("div");
  cityName.textContent = "Enter City Name Above";
  cityName.classList.add("city-name");
  weatherSearch.appendChild(cityName);

  // Create the weather display elements
  const weatherDisplay = document.createElement("ul");
  weatherDisplay.classList.add("weather-display");
  weatherDisplay.classList.add("hidden");

  const startDisplay = document.createElement("div");
  startDisplay.classList.add("start-display");
  //   startDisplay.classList.add("hidden");

  // Create an image element
  const imageElement = document.createElement("img");

  imageElement.src = "/img/Front.jpg";

  imageElement.classList.add("front-image");
  startDisplay.appendChild(imageElement);
  document.body.appendChild(startDisplay);

  const cloud_pc = document.createElement("li");
  cloud_pc.classList.add("weather-properties");
  cloud_pc.id = "cloud-pc";
  const cloudIcon = document.createElement("i");
  cloudIcon.classList.add("fa", "fa-cloud");
  cloud_pc.appendChild(cloudIcon);

  const feels_like = document.createElement("li");
  feels_like.classList.add("weather-properties");
  feels_like.id = "feels-like";
  const feelsIcon = document.createElement("i");
  feelsIcon.classList.add("fa", "fa-tree");
  feels_like.appendChild(feelsIcon);

  const humidity = document.createElement("li");
  humidity.classList.add("weather-properties");
  humidity.id = "humidity";
  const humidityIcon = document.createElement("i");
  humidityIcon.classList.add("fa", "fa-tint");
  humidity.appendChild(humidityIcon);

  const max_temp = document.createElement("li");
  max_temp.classList.add("weather-properties");
  max_temp.id = "max-temp";
  const maxTempIcon = document.createElement("i");
  maxTempIcon.classList.add("fa", "fa-fire");
  max_temp.appendChild(maxTempIcon);

  const min_temp = document.createElement("li");
  min_temp.classList.add("weather-properties");
  min_temp.id = "min-temp";
  const minTempIcon = document.createElement("i");
  minTempIcon.classList.add("fa", "fa-snowflake-o");
  min_temp.appendChild(minTempIcon);

  const sunrise = document.createElement("li");
  sunrise.classList.add("weather-properties");
  sunrise.id = "sunrise";
  const sunriseIcon = document.createElement("i");
  sunriseIcon.classList.add("fa", "fa-sun-o");
  sunrise.appendChild(sunriseIcon);

  const sunset = document.createElement("li");
  sunset.classList.add("weather-properties");
  sunset.id = "sunset";
  const sunsetIcon = document.createElement("i");
  sunsetIcon.classList.add("fa", "fa-sun");
  sunset.appendChild(sunsetIcon);

  const temp = document.createElement("li");
  temp.classList.add("weather-properties");
  temp.id = "temperature";
  const tempIcon = document.createElement("i");
  tempIcon.classList.add("fa", "fa-thermometer-three-quarters");
  temp.appendChild(tempIcon);

  const wind_degrees = document.createElement("li");
  wind_degrees.classList.add("weather-properties");
  wind_degrees.id = "wind-degrees";
  const windIcon = document.createElement("i");
  windIcon.classList.add("fa", "fa-leaf");
  wind_degrees.appendChild(windIcon);

  const wind_speed = document.createElement("li");
  wind_speed.classList.add("weather-properties");
  wind_speed.id = "wind-speed";
  const windSpeedIcon = document.createElement("i");
  windSpeedIcon.classList.add("fa", "fa-camera-retro");
  wind_speed.appendChild(windSpeedIcon);

  const loadingSpinner = document.createElement("div");
  loadingSpinner.classList.add("loading-spinner");

  weatherDisplay.appendChild(loadingSpinner);
  weatherDisplay.appendChild(temp);
  weatherDisplay.appendChild(feels_like);
  weatherDisplay.appendChild(cloud_pc);
  weatherDisplay.appendChild(humidity);
  weatherDisplay.appendChild(wind_speed);
  weatherDisplay.appendChild(wind_degrees);
  weatherDisplay.appendChild(max_temp);
  weatherDisplay.appendChild(min_temp);
  weatherDisplay.appendChild(sunrise);
  weatherDisplay.appendChild(sunset);

  // Append all elements to the main container
  weatherContent.appendChild(weatherSearch);
  weatherContent.appendChild(weatherDisplay);
  weatherContent.appendChild(startDisplay);
  weatherAppContainer.appendChild(weatherHeader);
  weatherAppContainer.appendChild(weatherContent);
}
