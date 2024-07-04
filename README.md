# Weather App

## checkout my Weather-App 
https://weather-app-neon-ten-70.vercel.app/
(here it will not fetch data because i have hidden API_key)


A simple web application that fetches and displays weather data from the OpenWeatherMap API based on the user's location input.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Introduction

The Weather App allows users to input a location and retrieve current weather conditions, including temperature, humidity, and a brief description of the weather. The application leverages the OpenWeatherMap API to fetch weather data.

## Features

- Fetches current weather data based on user input.
- Displays weather conditions, temperature, and humidity.
- User-friendly interface with basic error handling.

## Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- An active internet connection.

### Steps

1. Clone the repository or download the files.

   ```sh
   git clone https://github.com/imaadiiii/PRODIGY_WD_05.git
   cd weather-app
   ```

2. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/).

3. Replace the placeholder API key in `scripts.js` with your actual API key.

   ```javascript
   const apiKey = 'YOUR_ACTUAL_API_KEY'; // Replace with your actual OpenWeatherMap API key
   ```

4. Open `index.html` in your web browser.

## Usage

1. Open the `index.html` file in your web browser.
2. Enter a location (e.g., "London") in the input field.
3. Click the "Get Weather" button.
4. View the weather information displayed below the input field.

## Troubleshooting

### Common Issues

- **Invalid API Key**: Ensure that the API key is correctly set and has not expired. Test it directly in the browser using:
  ```sh
  https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_ACTUAL_API_KEY&units=metric
  ```

- **Network Errors**: Open the browser's developer tools (F12) and check the "Network" and "Console" tabs for any error messages.

- **Location Not Found**: Ensure that the location is correctly spelled and recognized by OpenWeatherMap.

### Debugging

- **Console Logs**: The application includes detailed logging. Open the developer tools and check the "Console" tab for logs like "Fetching weather data for:", "HTTP Status:", and "API Response:".

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
