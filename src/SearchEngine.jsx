import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormateDate";

export default function SearchEngine(props) {
  const [city, setCity] = useState("");
  // const defaultCity = props.defaultCity;
  // let [temperature, setTemperature] = useState(null);
  // let [humidity, setHumidity] = useState("");
  // let [wind, setWind] = useState(null);
  // let [icon, setIcon] = useState("");
  // let [description, setDescription] = useState("");
  // const [load, setLoad] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "1f485c022e4af72c068b4973496c26cc";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {

    // console.log("Date", new Date(response.data.dt*1000));
    // setLoad(true);
    // setTemperature(response.data.main.temp);
    // setHumidity(response.data.main.humidity);
    // setWind(response.data.wind.speed);
    // setDescription(response.data.weather[0].description);
    // setIcon(
    //   `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    // );

    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      precipitation: "7"
    })
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                onChange={updateCity}
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <FormatDate date={weatherData.date}/>
        <p>{weatherData.description}</p>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            {Math.round(weatherData.temperature)}°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherData.precipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
            <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
            className="form-control"
          />
            </div>
            <div className="col-3">
          <input type="submit" className="btn btn-primary"/>
          </div>
          </div>
        </form>
      </div>
    );
  }
}
