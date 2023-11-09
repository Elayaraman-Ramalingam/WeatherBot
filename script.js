const apiKey = '40147f09d748967372c0053a0f801c52';
let lat = '';
let lon = '';

const p = document.getElementById("location")

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function consoleWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Weather Data:', data);
            p.innerHTML = data.name;
        })
        .catch(error => console.error('Error fetching data:', error));
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    consoleWeather();
}

getLocation();
