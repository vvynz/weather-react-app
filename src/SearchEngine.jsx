import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine () {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState("");
  let [description, setDescription] = useState("");
  let [load, setLoad] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1f485c022e4af72c068b4973496c26cc";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setLoad(true);
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  if (load) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input type="submit" />
        </form>
        <ul>
          <li>Temperature: {Math.round(temperature)}</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>wind: {wind}km/h</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
