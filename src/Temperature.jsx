import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  const fahrenheit = (props.celsius * 9 / 5) + 32;

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
      <div className="Temp">
        <span>
          {Math.round(props.celsius)}°C |{" "}
          <a href="/" onClick={convertToF}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temp">
        <span>
          {Math.round(fahrenheit)} <a href="/" onClick={convertToC}>°C</a> | °F
        </span>
      </div>
    );
  }
}
