import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToF(e) {
    e.preventDefault();
    setUnit("fahrenheit");
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
      <div className="Temp">
        <span>
          {Math.round(props.celsius)} <a href="/">°C</a> | °F
        </span>
      </div>
    );
  }
}
