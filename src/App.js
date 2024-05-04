import React from "react";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import HourlyForecast from "./Components/HourlyForecast";
import DailyForecast from "./Components/DailyForecast";

const App = () => {
  return (
    <div>
      <SearchBar />
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
};

export default App;
