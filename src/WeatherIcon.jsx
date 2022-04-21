import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.scss";
import clearDay from "./icons/clear-day.svg";
import clearNight from "./icons/clear-night.svg";

export default function WeatherIcon(props) {
  const iconMap = {
    // "01d": "CLEAR_DAY",
    "01d": clearDay,
    // "01n": "CLEAR_NIGHT",
    "01n": clearNight,
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG"
  }
  return(
    // <ReactAnimatedWeather 
    // icon={iconMap[props.icon]}
    // color="#DDBBFF"
    // size={100}
    // animate={true}
    // />
    <img className="weather-icon" src={iconMap[props.icon]}></img>
  );
}