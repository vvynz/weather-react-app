import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  const fahrenheit = (props.celsius * 9) / 5 + 32;

  function convertToF(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToC(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temp">
        <div className="celsius">
          {Math.round(props.celsius)}°C |{" "}
          <a href="/" onClick={convertToF}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="temp">
        <span className="fahrenheit">
          {Math.round(fahrenheit)}°F | <a href="/" onClick={convertToC}>°C</a>
        </span>
      </div>
    );
  }
}
