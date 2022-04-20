import React, { useState } from "react";

export default function Temperature(props) {
  
  return(
    <div className="Temp">
      <span>{Math.round(props.celsius)}°C | <a href="/" >°F</a></span>
    </div>
  );
}