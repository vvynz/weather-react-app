import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(res) {
    setForecastData(res.data.daily);
    setLoaded(true);
  }

  function loadForecast() {
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    const apiKey = "1f485c022e4af72c068b4973496c26cc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
  }
  

  if(loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function(dailyForecast, index) {
            if(index < 5) {
              return (
                  <div key={index} className="col">
                  <WeatherForecastDay data={dailyForecast} />
                </div>
                );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    loadForecast();
    return null;
  }
}
