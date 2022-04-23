import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecastA";

export default function SearchEngine(props) {
  const defaultCity = props.defaultCity;
  const [city, setCity] = useState(defaultCity);
  // let [temperature, setTemperature] = useState(null);
  // let [humidity, setHumidity] = useState("");
  // let [wind, setWind] = useState(null);
  // let [icon, setIcon] = useState("");
  // let [description, setDescription] = useState("");
  // const [load, setLoad] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function searchCity() {
    const apiKey = "1f485c022e4af72c068b4973496c26cc";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    // const time = new Date(response.data.dt*1000);
    // console.log("Date", time.toLocaleString({hour: 'numeric', minute: 'numeric', hour12: true}));
    // console.log("DATA", response.data);
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
      coord: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      // icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      precipitation: "7", //TEMP DATA, update later
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <form className="search-form" onSubmit={handleSubmit}>
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
              <button type="submit" className="btn search-btn">
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    searchCity();
    return (
      <div>
        <form className="search-form" onSubmit={handleSubmit}>
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
              <button type="submit" className="btn search-btn">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
