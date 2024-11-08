const wts = ["Sunny","Partly cloudy" ,"Cloudy","Overcast","Mist","Patchy rain possible","Patchy sleet possible","Patchy freezing drizzle possible","Blowing snow","Blizzard",
    "Fog","Freezing fog","Patchy light drizzle","Light drizzle","Freezing drizzle", "Heavy freezing drizzle","Patchy light rain","Light rain","Moderate rain at times", "Moderate rain",
    "Heavy rain at times","Heavy rain","Light freezing rain","Moderate or heavy freezing rain","Light sleet","Moderate or heavy sleet","Patchy light snow","Light snow","Patchy moderate snow",
    "Moderate snow","Patchy heavy snow", "Heavy snow","Ice pellets","Light rain shower","Moderate or heavy rain shower","Torrential rain shower","Light sleet showers","Moderate or heavy sleet showers",
    "Light snow showers","Moderate or heavy snow showers","Light showers of ice pellets","Moderate or heavy showers of ice pellets","Patchy light rain with thunder","Moderate or heavy rain with thunder",
    "Patchy light snow with thunder","Moderate or heavy snow with thunder"];

const weatherColors = [
    "#FFD700", // "Sunny"
    "#87CEEB", // "Partly cloudy"
    "#B0C4DE", // "Cloudy"
    "#A9A9A9", // "Overcast"
    "#E0FFFF", // "Mist"
    "#ADD8E6", // "Patchy rain possible"
    "#E6E6FA", // "Patchy snow possible"
    "#B0E0E6", // "Patchy sleet possible"
    "#F0FFF0", // "Patchy freezing drizzle possible"
    "#FFA500", // "Thundery outbreaks possible"
    "#D8BFD8", // "Blowing snow"
    "#708090", // "Blizzard"
    "#696969", // "Fog"
    "#778899", // "Freezing fog"
    "#AFEEEE", // "Patchy light drizzle"
    "#ADD8E6", // "Light drizzle"
    "#B0E0E6", // "Freezing drizzle"
    "#4682B4", // "Heavy freezing drizzle"
    "#87CEEB", // "Patchy light rain"
    "#00BFFF", // "Light rain"
    "#4682B4", // "Moderate rain at times"
    "#4169E1", // "Moderate rain"
    "#1E90FF", // "Heavy rain at times"
    "#0000CD", // "Heavy rain"
    "#6495ED", // "Light freezing rain"
    "#00008B", // "Moderate or heavy freezing rain"
    "#B0E0E6", // "Light sleet"
    "#87CEFA", // "Moderate or heavy sleet"
    "#E0FFFF", // "Patchy light snow"
    "#FFFFFF", // "Light snow"
    "#F0F8FF", // "Patchy moderate snow"
    "#F8F8FF", // "Moderate snow"
    "#DCDCDC", // "Patchy heavy snow"
    "#F5F5F5", // "Heavy snow"
    "#B0C4DE", // "Ice pellets"
    "#ADD8E6", // "Light rain shower"
    "#4169E1", // "Moderate or heavy rain shower"
    "#00008B", // "Torrential rain shower"
    "#B0E0E6", // "Light sleet showers"
    "#4682B4", // "Moderate or heavy sleet showers"
    "#E0FFFF", // "Light snow showers"
    "#F0F8FF", // "Moderate or heavy snow showers"
    "#B0C4DE", // "Light showers of ice pellets"
    "#4682B4", // "Moderate or heavy showers of ice pellets"
    "#FFD700", // "Patchy light rain with thunder"
    "#FFA500", // "Moderate or heavy rain with thunder"
    "#E0FFFF", // "Patchy light snow with thunder"
    "#F0F8FF"  // "Moderate or heavy snow with thunder"
];

const apiKey = "1152cf331f0242529a2182935240711";

var cidade = $("#cidadeInput");

var date = new Date();
var icon = document.getElementById("imgIcon");
var main

function consultar(){
    $.getJSON(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade.val()}&aqi=no`,
        function (data) {
            $("#temp").text("Temperatura: " + data["current"]["temp_c"] + "ºC");
            $("#data").text("Data: " + data["location"]["localtime"])
            $("#clima").text("Clima: " + data["current"]["condition"]["text"])
            icon.src = "https:" + data["current"]["condition"]["icon"];
            document.getElementById("MainContainer").style.backgroundColor = wts.indexOf(data["current"]["condition"]["text"]);
            console.log(data["current"]["condition"]["icon"]);
        }
    );
}
