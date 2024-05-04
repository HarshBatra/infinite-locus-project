import React from "react";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import HourlyForecast from "./Components/HourlyForecast";
import DailyForecast from "./Components/DailyForecast";

const App = () => {
  return (
    <div className="p-10 md:p-20 bg-sky-200 h-screen">
      <SearchBar />
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
