import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  // console.log(props.data);
  const data = props.data;

  function formatDay() {
    let date = new Date(data.dt*1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }
  
  return (
    <div>
      <div className="WeatherForecast-date">{formatDay()}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon icon={data.weather[0].icon} />
        {/* TEMP DATA, WILL NEED TO UPDATE LATER */}
      </div>
      <span className="WeatherForecast-temp-max">{data.temp.max}°</span>
      <span className="WeatherForecast-temp-min">{data.temp.min}°</span>
    </div>
  );
}
