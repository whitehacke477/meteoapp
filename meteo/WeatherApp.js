
import React, { useState } from 'react';
import WeatherCard from './WeatherCard';


const citiesData = {
  NewYork : {
    
      "city": "New York",
      "date_time": "2023-11-12 / T12:00:00",
      "weather": {
        "condition": "Partly Cloudy",
        "temperature": { "current": 18, "max": 22, "min": 15 },
        "precipitation": { "value": 0.2, "unit": "mm" },
        "uv_index": 5
      },
      "times_of_day": {
        "morning": { "temperature": 15, "condition": "Clear" },
        "afternoon": { "temperature": 22, "condition": "Partly Cloudy" },
        "evening": { "temperature": 18, "condition": "Cloudy" },
        "night": { "temperature": 16, "condition": "Clear" }
      }
    },
    Tokyo:{
      "city": "Tokyo",
      "date_time": "2023-11-12 / T12:00:00",
      "weather": {
        "condition": "Rainy",
        "temperature": { "current": 20, "max": 24, "min": 18 },
        "precipitation": { "value": 5, "unit": "mm" },
        "uv_index": 3
      },
      "times_of_day": {
        "morning": { "temperature": 18, "condition": "Rainy" },
        "afternoon": { "temperature": 22, "condition": "Thunderstorm" },
        "evening": { "temperature": 19, "condition": "Rainy" },
        "night": { "temperature": 17, "condition": "Showers" }
      }
    } ,

    London :{
      "city": "London",
      "date_time": "2023-11-12 / T12:00:00",
      "weather": {
        "condition": "Cloudy",
        "temperature": { "current": 12, "max": 15, "min": 10 },
        "precipitation": { "value": 1, "unit": "mm" },
        "uv_index": 2
      },
      "times_of_day": {
        "morning": { "temperature": 10, "condition": "Cloudy" },
        "afternoon": { "temperature": 14, "condition": "Rainy" },
        "evening": { "temperature": 12, "condition": "Cloudy" },
        "night": { "temperature": 11, "condition": "Showers" }
      }
    } ,
    Sydney : {
      "city": "Sydney",
      "date_time": "2023-11-12 / T12:00:00",
      "weather": {
        "condition": "Sunny",
        "temperature": { "current": 28, "max": 32, "min": 25 },
        "precipitation": { "value": 0, "unit": "mm" },
        "uv_index": 9
      },
      "times_of_day": {
        "morning": { "temperature": 25, "condition": "Sunny" },
        "afternoon": { "temperature": 32, "condition": "Clear" },
        "evening": { "temperature": 28, "condition": "Sunny" },
        "night": { "temperature": 26, "condition": "Clear" }
      }
    } ,
    
    Paris :{
      "city": "Paris",
      "date_time": "2023-11-12 / T12:00:00",
      "weather": {
        "condition": "Foggy",
        "temperature": { "current": 10, "max": 14, "min": 8 },
        "precipitation": { "value": 0.1, "unit": "mm" },
        "uv_index": 1
      },
      "times_of_day": {
        "morning": { "temperature": 8, "condition": "Foggy" },
        "afternoon": { "temperature": 14, "condition": "Partly Cloudy" },
        "evening": { "temperature": 11, "condition": "Foggy" },
        "night": { "temperature": 9, "condition": "Clear" }
      }
    } ,

    khouribga :{
      "city": "Khouribga",
      "date_time": "2023-11-12 / T12:00:00",
      "weather": {
        "condition": "Partly Cloudy",
        "temperature": { "current": 22, "max": 26, "min": 18 },
        "precipitation": { "value": 0.3, "unit": "mm" },
        "uv_index": 6
      },
      "times_of_day": {
        "morning": { "temperature": 18, "condition": "Clear" },
        "afternoon": { "temperature": 26, "condition": "Partly Cloudy" },
        "evening": { "temperature": 20, "condition": "Cloudy" },
        "night": { "temperature": 19, "condition": "Clear" }
      }
    } 
  }


const WeatherApp = () => {
  const [selectedCity, setSelectedCity] = useState(Object.keys(citiesData)[0]);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="weather-app">
      <select value={selectedCity} onChange={handleCityChange}>
        {Object.keys(citiesData).map(city => (
          <option  value={city} >{citiesData[city].city}</option>
        ))}
      </select>
      <WeatherCard data={citiesData[selectedCity]} />
    </div>
  );
};

export default WeatherApp;
