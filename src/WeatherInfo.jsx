import React from "react";
import FormatDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.scss";

export default function WeatherInfo(props) {
  const data = props.data;

  return (
    <div className="info-display">
      <h1>{data.city}</h1>
      <FormatDate date={data.date} />
      <p>{data.description}</p>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <ReactAnimatedWeather
                icon="SLEET"
                color="GREY"
                size={18}
                animate={true}
              />
              : {data.precipitation}%
            </li>
            {/* <li>Humidity: {data.humidity}%</li> */}
            <li>
              <ReactAnimatedWeather
                icon="WIND"
                color="GREY"
                size={18}
                animate={true}
              />
              : {data.wind}km/h
            </li>
          </ul>
        </div>
        <div className="col-6 icon-col">
          <WeatherIcon icon={data.icon} />
          <Temperature celsius={data.temperature}/>
        </div>
      </div>
    </div>
  );
}
