'use client'
import React, { useState, useEffect } from 'react';

const OpenWeatherApi = () => {
  const apiKey = '036415f5e07e87135785dcc0f82f5e8b';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTemperature(data.main.temp);
        setDescription(data.weather[0].description);
        setLocation(data.name);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });/*, [apiUrl]*/

  if (!temperature || !description || !location) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div className='bg-slate-400 rounded-md m-auto text-slate-950'>
      <p>Temperature in {location}: {temperature}&#8451;C</p>
      <p>Weather: {description}</p>
    </div>
  );
};

export default OpenWeatherApi;
