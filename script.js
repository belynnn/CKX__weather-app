const API_KEY = "145fa33c313f9ae32520e0c9fd053f45";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const SEARCH_BOX = document.querySelector(".search input");
const SEARCH_BUTTON = document.querySelector(".search button");
const WEATHER_ICON = document.querySelector(".weather-icon");

async function checkWeather(city){
    const RESPONSE = await fetch(API_URL + city + `&appid=${API_KEY}`);
    if(RESPONSE.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await RESPONSE.json();

        // sélectionne les informations spécifiques de l'API + ajout des informations degrés, kilometrage, etc
        document.querySelector(".temp").innerHTML = data.main.temp + ` °C`;
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;
        document.querySelector(".humidity").innerHTML = data.main.humidity + ` %`;
    
        // modifie l'image en fonction de l'id météo de l'api
        if(data.weather[0].main == "Clouds"){
            WEATHER_ICON.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            WEATHER_ICON.src = "images/clear.png";
        }else if(data.weather[0].main == "Drizzle"){
            WEATHER_ICON.src = "images/drizzle.png";
        }else if(data.weather[0].main == "Snow"){
            WEATHER_ICON.src = "images/snow.png";
        }else if(data.weather[0].main == "Mist"){
            WEATHER_ICON.src = "images/mist.png";
        }else if(data.weather[0].main == "Rain"){
            WEATHER_ICON.src = "images/rain.png";
        }
    
        // fait apparaître la météo quand cliqué sur bouton recherche
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

SEARCH_BUTTON.addEventListener("click", () => {
    checkWeather(SEARCH_BOX.value);
})
