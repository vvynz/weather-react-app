import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecast-date">Fri</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon icon="09d" />
        {/* TEMP DATA, WILL NEED TO UPDATE LATER */}
      </div>
      <span className="WeatherForecast-temp-max">15°</span>
      <span className="WeatherForecast-temp-min">10°</span>
    </div>
  );
}
