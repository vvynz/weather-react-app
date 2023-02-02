import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function SearchEngine(props) {
  const defaultCity = props.defaultCity;
  const [city, setCity] = useState(defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function searchCity() {
    const apiKey = "1f485c022e4af72c068b4973496c26cc";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(url)
      .then(displayWeather)
      .catch((err) =>
        setError("Error: Please check the spelling of the city and try again.")
      );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    // console.log("res", response)
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      temp_max: response.data.main.temp_max,
      temp_min: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    setError("");
  }

  const getCurrentLocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(showCurrentLocation);
  };

  const showCurrentLocation = (pos) => {
    const apiKey = "1f485c022e4af72c068b4973496c26cc";
    const units = "metric";
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  };

  if (weatherData.ready) {
    return (
      <div>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city"
                onChange={updateCity}
                className="form-control"
              />
            </div>
            <div className="col-2">
              <button
                className="btn search-btn"
                type="submit"
                onClick={getCurrentLocation}
              >
                <FontAwesomeIcon icon={faLocationPin} />
              </button>
            </div>
            <div className="col-2">
              <button type="submit" className="btn search-btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo error={error} data={weatherData} />
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
