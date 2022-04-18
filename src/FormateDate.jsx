import React from 'react';

export default function FormatDate(props) {
  // console.log("Date props", props.date);

  const date = props.date;
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (hour < 10) hour = `0${hour}`;
  if (minutes < 10) minutes = `0${minutes}`;

  return(
    <p>{day} {hour}:{minutes}</p>
  );
}