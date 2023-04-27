
import { useEffect, useState } from 'react';
import './App.css';
import Forcast from './components/Forecast';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopCities from './components/TopCities';
import TopInputs from './components/TopInputs';
import getFormattedWeatherData from './services/WeatherServices';
import React from 'react';

function App() {

  const[query,setQuery]=useState({q: "salford"})
  const[units,setUnits] = useState("metric")
  const[weather,setWeather] = useState(null)
  

  useEffect(() => {
    const fetchWeather = async () => {

      const data = await getFormattedWeatherData({...query, units});
      setWeather(data);
    };
  
    fetchWeather();
  }, [query, units]);
  
  const formatBackground = () => {
    if (!weather) return ' from-cyan-700 to-blue-700 shadow-xl shadow-gray-400';
    const threshold = units === "metric" ? 20 : 60 ;
    if (weather.temp <= threshold)  return 'from-white-700 to-blue-800 shadow-xl shadow-gray-400';

    return 'from-yellow-700 to-orange-700'

  };
  


  return (
    <div className= {`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
     from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopCities setQuery ={setQuery} />
      <TopInputs setQuery ={setQuery} units={units} setUnits={setUnits} />
  
      {weather && (
        <div>
          <TimeAndLocation weather= {weather}/>
          <TemperatureAndDetails weather ={weather}/>
          <Forcast title="hourly forecast"  items={weather.hourly}/>
          <Forcast title="daily forecast" items={weather.daily}/>
        </div>
      )}
  

 
    </div>
  );
}

export default App;
