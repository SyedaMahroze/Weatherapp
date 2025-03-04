const apiKey = "";
const apiUrl = "";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".Weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}q=${city}&appid=${apiKey}`);

        if (!response.ok) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".Weather").style.display = "none";
            return;
        }

        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            WeatherIcon.src = "images/clouds.jpeg";
        } else if (data.weather[0].main == "Clear") {
            WeatherIcon.src = "images/clear.webp";
        } else if (data.weather[0].main == "Rain") {
            WeatherIcon.src = "images/rain.jpeg";
        } else if (data.weather[0].main == "Drizzle") {
            WeatherIcon.src = "images/drizzle.webp";
        } else if (data.weather[0].main == "Mist") {
            WeatherIcon.src = "images/mist.webp";
        }

        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});
