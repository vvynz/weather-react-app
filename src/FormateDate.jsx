import React from 'react';

export default function FormatDate(props) {
  // console.log("Date props", props.date);

  const date = props.date;
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[date.getDay()];
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return(
    <p>{day} {hour}:{minutes}</p>
  );
}