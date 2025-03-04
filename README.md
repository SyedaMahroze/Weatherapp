# Weather App

This is a simple weather application that allows users to search for the current weather conditions of any city using the OpenWeather API.

## Features
- Search weather by city name
- Displays temperature, humidity, and wind speed
- Shows weather icons based on the current weather condition
- Error handling for invalid city names

## Technologies Used
- HTML
- CSS
- JavaScript

## Setup and Usage
### 1. Get API Key
This application requires an API key from [OpenWeather](https://openweathermap.org/api). Follow these steps to obtain one:
1. Sign up or log in to OpenWeather.
2. Navigate to the API section and generate an API key.
3. Copy the API key and use it in the `script.js` file.

### 2. Modify the API URL
Update the `apiUrl` variable in `script.js` as follows:
```javascript
const apiKey = "YOUR_API_KEY_HERE";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
```

### 3. Run the Application
1. Open `index.html` in a browser.
2. Enter a city name in the search box and click the search button.
3. The weather details for the entered city will be displayed.

## API Explanation
The OpenWeather API provides weather data based on the given city name. The request URL format is:
```
https://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&appid=YOUR_API_KEY&units=metric
```
- `q=CITY_NAME`: Specifies the city name.
- `appid=YOUR_API_KEY`: Your unique API key for authentication.
- `units=metric`: Ensures temperature is returned in Celsius.

The API response contains weather details, including:
- `main.temp`: Current temperature
- `main.humidity`: Humidity percentage
- `wind.speed`: Wind speed in km/h
- `weather[0].main`: Weather condition (e.g., Clouds, Rain, Clear)

## Error Handling
If the user enters an invalid city name, an error message will be displayed.

## Future Improvements
- Add weather forecast for upcoming days
- Improve UI with animations and better design
- Include more weather details like pressure and visibility

## License
This project is open-source and free to use. Feel free to contribute or modify it as needed.

