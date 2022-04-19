import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const iconMap = {
    "04d": "CLOUDY"
  }
  return(
    <ReactAnimatedWeather 
    icon={iconMap[props.icon]}
    color="PURPLE"
    size={60}
    animate={true}
    />
  );
}