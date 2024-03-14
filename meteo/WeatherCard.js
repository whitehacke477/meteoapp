

import React from 'react';
import './appcss.css';
const WeatherCard = ({ data }) => {
  const { city, date_time, weather, times_of_day } = data;

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>{date_time}</p>
      <img className='img-w' src={`images/${weather.condition.toLowerCase()}.png`} alt={weather.condition} />
      <p className='font-text'><b>{weather.temperature.current}°C</b></p>
      <p className='font-text' >Max: <b>{weather.temperature.max}°C <b>/</b> Min: {weather.temperature.min}°C</b></p>
      <p className='font-text'><b>{weather.condition}</b></p>
      <div className='info-w'>
        <span className='font-text'> <b>Precipitation <br/>{weather.precipitation.value} {weather.precipitation.unit}</b></span>
        <span className='font-text'> <b>UV Index <br/>{weather.uv_index}</b></span>
      </div>
     
      <h3>Times of Day</h3>
      <div className="times-of-day">
        <div className='font-text'><b>Morning</b>   {times_of_day.morning.temperature}°C - {times_of_day.morning.condition}</div>
        <div className='font-text'> <b>Afternoon</b>   {times_of_day.afternoon.temperature}°C - {times_of_day.afternoon.condition}</div>
        <div className='font-text'> <b>Evening</b>   {times_of_day.evening.temperature}°C - {times_of_day.evening.condition}</div>
        <div className='font-text'> <b>Night</b> {times_of_day.night.temperature}°C - {times_of_day.night.condition}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
