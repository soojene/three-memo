const weatherContainer = document.querySelector(".weatherJs");
const API_KEY = '0feb0c36f34bf10c945ce585d9cbe2b3'; //openweathermap API
//API는 다른 서버로부터 데이터를 손쉽게 가져오는 수단!
const coords = 'currentLocation';

let weatherNow = "";

function getNowWeather (weatherText){
    switch(weatherText){
        case "Snow":
            weatherNow = "☃️";
            break;
        case "Clear":
            weatherNow = "😎";
            break;
        case "Rain":
            weatherNow = "🌧";
            break;
        case "Clouds":
            weatherNow = "🌥";
            break;
        case "Mist":
            weatherNow = "🌦";
            break;
        default:
            weatherNow = "☁️";
            break;
    } 
}

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        )
        .then(function(response){
            return response.json();
        })
        .then (function(json){
            const place = json.name;
            const temp = json.main.temp;
            const mainWeather= json.weather[0].main; 
            getNowWeather(mainWeather);
            weatherContainer.innerText = `${place} | ${mainWeather} ${weatherNow} | ${temp}℃`;
        });
}

function saveCoords (coordsObj){
    localStorage.setItem(coords, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, 
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("cant access geo location");//엑세스를 허용하지 않으면 이 메세지 뜸.
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);//인자 2개
}

function loadCoords (){
    const loadedCoords = localStorage.getItem(coords);
    if (loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


loadCoords();
