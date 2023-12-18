var cityName = document.querySelector("#city")
var date = document.querySelector("#date")
var day = document.querySelector("#day")
var temperature = document.querySelector("#temperature")
var condition = document.querySelector("#condition")
var sunnyURL = "Images/Sun.svg"
var cloudURL = "Images/Vector (1).svg"
var cloudRainURL = "Images/bi_cloud-rain.svg"
var weatherImg = document.querySelector("#weather-img")
var city = prompt("Şəhəri daxil edin:")

weatherImg.src = cloudURL

const today = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = daysOfWeek[today.getDay()];

console.log(dayOfWeek);
day.textContent = dayOfWeek

const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city};`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eb5e6b1286msh0f1e6b2306fb8c3p1555b7jsn561eb9277403",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

async function app() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    console.log(result.location.name);

    cityName.textContent = result.location.name + ", " + result.location.country
    date.textContent = result.location.localtime
    temperature.textContent = result.current.temp_c + "  °C"
    condition.textContent = result.current.condition.text


  } catch (error) {
    console.error(error);
  }
}

app();
