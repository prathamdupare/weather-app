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
  const searchButton = document.createElement("button");
  searchButton.textContent = "Search";
  weatherSearch.appendChild(cityInput);
  weatherSearch.appendChild(searchButton);

  // Create the weather display elements
  const weatherDisplay = document.createElement("div");
  weatherDisplay.classList.add("weather-display");
  const cityName = document.createElement("h2");
  cityName.textContent = "City Name";
  const weatherDescription = document.createElement("p");
  weatherDescription.textContent = "Weather Description";
  const temperature = document.createElement("p");
  temperature.textContent = "Temperature";
  const weatherIcon = document.createElement("img");
  weatherIcon.setAttribute("id", "weather-icon");
  weatherIcon.setAttribute("src", "");
  weatherIcon.setAttribute("alt", "Weather Icon");

  weatherDisplay.appendChild(cityName);
  weatherDisplay.appendChild(weatherDescription);
  weatherDisplay.appendChild(temperature);
  weatherDisplay.appendChild(weatherIcon);

  // Append all elements to the main container
  weatherContent.appendChild(weatherSearch);
  weatherContent.appendChild(weatherDisplay);
  weatherAppContainer.appendChild(weatherHeader);
  weatherAppContainer.appendChild(weatherContent);
}
