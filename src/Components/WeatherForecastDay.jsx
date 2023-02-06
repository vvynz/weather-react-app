import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  const data = props.data;

  function formatDay() {
    let date = new Date(data.dt*1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  function maxTemp() {
    let temp = data.temp.max;
    return (Math.round(temp));
  }

  function minTemp() {
    let temp = data.temp.min;
    return (Math.round(temp));
  }
  
  return (
    <div>
      <div className="weatherForecast-date">{formatDay()}</div>
      <div className="weatherForecast-icon">
        <WeatherIcon icon={data.weather[0].icon} description={data.weather[0].description} />
      </div>
      <span className="weatherForecast-temp-max">{maxTemp()}°</span>
      <span className="weatherForecast-temp-min">{minTemp()}°</span>
    </div>
  );
}
