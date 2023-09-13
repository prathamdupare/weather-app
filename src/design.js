export function createUI() {
  const weatherAppContainer = document.getElementById("weatherApp");

  // Create the header
  const weatherHeader = document.createElement("div");
  weatherHeader.classList.add("weather-header");
  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "Weather App";
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

  // Create the weather display elements
  const weatherDisplay = document.createElement("ul");
  weatherDisplay.classList.add("weather-display");
  weatherDisplay.classList.add("hidden");

  const startDisplay = document.createElement("div");
  startDisplay.classList.add("start-display");
  //   startDisplay.classList.add("hidden");

  // Create an image element
  const imageElement = document.createElement("img");

  imageElement.src = "/Front.jpg";
  imageElement.classList.add("front-image");
  startDisplay.appendChild(imageElement);
  document.body.appendChild(startDisplay);

  const cloud_pc = document.createElement("li");
  cloud_pc.classList.add("weather-properties");
  cloud_pc.id = "cloud-pc"; // Add an ID based on the name
  cloud_pc.innerHTML = "";

  const feels_like = document.createElement("li");
  feels_like.classList.add("weather-properties");
  feels_like.id = "feels-like";

  const humidity = document.createElement("li");
  humidity.classList.add("weather-properties");
  humidity.id = "humidity";

  const max_temp = document.createElement("li");
  max_temp.classList.add("weather-properties");
  max_temp.id = "max-temp";

  const min_temp = document.createElement("li");
  min_temp.classList.add("weather-properties");
  min_temp.id = "min-temp";

  const sunrise = document.createElement("li");
  sunrise.classList.add("weather-properties");
  sunrise.id = "sunrise";

  const sunset = document.createElement("li");
  sunset.classList.add("weather-properties");
  sunset.id = "sunset";

  const temp = document.createElement("li");
  temp.classList.add("weather-properties");
  temp.id = "temperature";

  const wind_degrees = document.createElement("li");
  wind_degrees.classList.add("weather-properties");
  wind_degrees.id = "wind-degrees";

  const wind_speed = document.createElement("li");
  wind_speed.classList.add("weather-properties");
  wind_speed.id = "wind-speed";

  weatherDisplay.appendChild(cloud_pc);
  weatherDisplay.appendChild(feels_like);
  weatherDisplay.appendChild(humidity);
  weatherDisplay.appendChild(max_temp);
  weatherDisplay.appendChild(min_temp);
  weatherDisplay.appendChild(sunrise);
  weatherDisplay.appendChild(sunset);
  weatherDisplay.appendChild(temp);
  weatherDisplay.appendChild(wind_degrees);
  weatherDisplay.appendChild(wind_speed);

  // Append all elements to the main container
  weatherContent.appendChild(weatherSearch);
  weatherContent.appendChild(weatherDisplay);
  weatherContent.appendChild(startDisplay);
  weatherAppContainer.appendChild(weatherHeader);
  weatherAppContainer.appendChild(weatherContent);
}
