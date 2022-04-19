import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return(
    <ReactAnimatedWeather 
    icon="CLEAR_DAY"
    color="PURPLE"
    size={60}
    animate={true}
    />
  );
}