import React from "react";
// import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.scss";
import brokenCloudsDay from "./icons/broken-clouds-day.svg";
import brokenCloudsNight from "./icons/broken-clouds-night.svg"
import clearDay from "./icons/clear-day.svg";
import clearNight from "./icons/clear-night.svg";
import partlyCloudyDay from "./icons/partly-cloudy-day.svg";
import partlyCloudyNight from "./icons/partly-cloudy-night.svg";
import scatteredClouds from "./icons/scattered-clouds.svg";
import showerRainDay from "./icons/shower-rain-day.svg";
import showerRainNight from "./icons/shower-rain-night.svg";
import dayRain from "./icons/day-rain.svg";
import nightRain from "./icons/night-rain.svg";
import thunderstorm from "./icons/thunderstorms.svg";
import snow from "./icons/snow.svg";
import fog from "./icons/fog.svg";
import fogNight from "./icons/fog-night.svg";

export default function WeatherIcon(props) {
  const iconMap = {
    // "01d": "CLEAR_DAY",
    // "01n": "CLEAR_NIGHT",
    // "02d": "PARTLY_CLOUDY_DAY",
    // "02n": "PARTLY_CLOUDY_NIGHT",
    // "03d": "PARTLY_CLOUDY_DAY",
    // "03n": "PARTLY_CLOUDY_NIGHT",
    // "04d": "CLOUDY",
    // "04n": "CLOUDY",
    // "09d": "RAIN",
    // "09n": "RAIN",
    // "10d": "RAIN",
    // "10n": "RAIN",
    // "11d": "RAIN",
    // "11n": "RAIN",
    // "13d": "SNOW",
    // "13n": "SNOW",
    // "50d": "FOG",
    // "50n": "FOG"

    "01d": clearDay,
    "01n": clearNight,
    "02d": partlyCloudyDay,
    "02n": partlyCloudyNight,
    "03d": scatteredClouds,
    "03n": scatteredClouds,
    "04d": brokenCloudsDay,
    "04n": brokenCloudsNight,
    "09d": showerRainDay,
    "09n": showerRainNight,
    "10d": dayRain,
    "10n": nightRain,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": fog,
    "50n": fogNight
  }
  return(
    // <ReactAnimatedWeather 
    // icon={iconMap[props.icon]}
    // color="#DDBBFF"
    // size={100}
    // animate={true}
    // />
    <img className="weather-icon" src={iconMap[props.icon]} alt="" />
  );
}