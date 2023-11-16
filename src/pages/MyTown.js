/* 
-------------------------------------------------------------------------------------------
MyTown omponent contains code for the my town view/page
*Adds a picture of the city where you currently live, i.e. Halifax
*Adds the town's name, i.e. "I live in Halifax, NS"
*Adds the current weather of Halifax (CurrentWeather component)
  - First we fetch current weather data for Halifx using API call to OpenWeatherMap
  - We retrieve temperature details from the received payload 
  - We convert the temperature to °C and store it's value in weatherData
  - Based on the current temperature we set the image path using getWeatherImage function 
  in weatherImage
*Adds a button "Change to °F", that if clicked will display the temprature in Fahrenheit 
and will display "Change to °C" and when clicked again it will display the temperature 
back in Celsius. 
  - When we click the button, the value of temperature unit gets updated in temperatureUnit
  and all the related updates are performed based on that value.
-------------------------------------------------------------------------------------------
*/

import React, { useState, useEffect } from "react";
import '../App.css';
import myTown from "../images/my_town.png"
import cold from "../images/cold.png"
import mild from "../images/mild.png"
import sunny from "../images/sunny.png"

const MyTown = () => {  

    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const [weatherData, setWeatherData] = useState(0);
    const [weatherImage, setWeatherImage] = useState("sunny");
    const [temperatureUnit, setTemperatureUnit] = useState('°C');

    const CurrentWeather = () => {

        useEffect(() => {
          fetchWeatherData("44.651070","-63.582687","a256f84b5a84a1431164d0ed7eab26ab");
        },[]);
    
        const fetchWeatherData = async (latitude, longitude, appid) => {
          const response = await fetch(`${API_URL}lat=${latitude}&lon=${longitude}&appid=${appid}`);
          const data = await response.json();
    
          let currentTemperature = (data.main.temp - 273.15).toFixed(2);
    
          setWeatherData(currentTemperature);
          getWeatherImage(currentTemperature);
    
        };
    
        const getWeatherImage = (temerature) => {
          (temerature > 10 & temerature <20) ? setWeatherImage("mild") : (temerature <= 10) ? setWeatherImage("cold") : setWeatherImage("sunny")
        };
    
        return (
          <>
            <p>{temperatureUnit === '°C' ? (weatherData + ' °C') : (((weatherData * (9/5)) + 32).toFixed(2) + ' °F')}</p>
            <img src = {(weatherImage === "cold") ? cold : (weatherImage === "mild") ? mild : sunny} alt = "Today's weather update"></img>
          </>);
    };

    const changeTemeratureUnit = () => {
      setTemperatureUnit(temperatureUnit === '°F' ? '°C' : '°F');
    };
    return (
      <div className='myTown'>
        <h3>I live in Halifax, NS</h3>
        <img src={myTown} alt="I live in Halifax, NS" id="haifax"/>
        <div className="currentWeather">
            <h4>Current temperature</h4>
            <CurrentWeather />
            <button onClick={changeTemeratureUnit}>{'Change to ' + (temperatureUnit === '°F' ? '°C' : '°F') }</button>
        </div>
      </div>
    );
};

export default MyTown;