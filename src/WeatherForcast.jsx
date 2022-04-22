import React from "react";

export default function WeatherForcast(props) {
  return(
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-date">Fri</div>
          <span className="WeatherForecast-temp-max">15°</span>
          <span className="WeatherForecast-temp-min">10°</span>
        </div>
      </div>
    </div>
  );
}