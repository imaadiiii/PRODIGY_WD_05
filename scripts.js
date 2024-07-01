const apiKey = 'enter your key';

document.getElementById('getWeatherBtn').addEventListener('click', fetchWeather);

function fetchWeather() {
    const location = document.getElementById('location').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    console.log('Fetching weather data for:', location); 
    console.log('Request URL:', url); 

    fetch(url)
        .then(response => {
            console.log('HTTP Status:', response.status); 
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(`HTTP error! Status: ${response.status} - ${err.message}`);
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response:', data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayError(error);
        });
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    if (data.cod === 200) {
        const { main, weather, name } = data;
        weatherDiv.innerHTML = `
            <h2>${name}</h2>
            <p>${weather[0].description}</p>
            <p>Temperature: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
        `;
    } else {
        console.error('Error in API response:', data); 
        weatherDiv.innerHTML = `<p>Location not found. Please try again.</p>`;
    }
}

function displayError(error) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `<p>Could not fetch weather data. Please try again later.</p>`;
    console.error('Error details:', error); 
}
