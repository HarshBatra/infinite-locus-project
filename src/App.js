import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import HourlyForecast from "./Components/HourlyForecast";
import DailyForecast from "./Components/DailyForecast";

// import CurrentWeatherApi from "./Components/CurrentWeather";
// import ForcastWeatherApi from "./Services/ForecastWeatherApi";

const App = () => {

  const [city, setCity] = useState("Delhi") ;
  const [search, setSearch] = useState("Delhi")

  // const data1 = CurrentWeatherApi(search);
  // const data2 = ForcastWeatherApi(search);
  
  const [CurrentWeatherdata, setCurrentWeatherData] = useState({})
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=6cef9f56aac048eab7d65200240405&q=${search}&aqi=no&alerts=no
        `)
        .then((res) => res.json())
        .then((res) => setCurrentWeatherData(res))
    }, [search])

  const [ForecastWeatherdata, ForecastWeatherData] = useState({})
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=6cef9f56aac048eab7d65200240405&q=${search}&days=3&aqi=no&alerts=no
        `)
        .then((res) => res.json())
        .then((res) => ForecastWeatherData(res))
    }, [search])
    

  const handleSearch = () => {
    setSearch(city);
    console.log(search)
  };

  console.log(CurrentWeatherdata)

  return (
    <div className="p-10 md:p-20 bg-sky-200 h-screen">
      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
      <div>
        <CurrentWeather />
        <div>
          <HourlyForecast />
          <DailyForecast />
        </div>
      </div>
    </div>
  );
};

export default App;
