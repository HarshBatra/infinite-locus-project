import React from "react";
import SearchBar from "./Components/SearchBar";
import CurrentWeather from "./Components/CurrentWeather";
import HourlyForecast from "./Components/HourlyForecast";
import DailyForecast from "./Components/DailyForecast";

const App = () => {
  return (
    <div className="p-10 md:p-20 bg-sky-200 h-screen text-sky-800">
      <SearchBar />
      <div className="flex flex-col md:flex-row justify-center md:justify-around mt-10 gap-8">
        <CurrentWeather />
        <div className="gap-4 flex flex-col md:w-2/3">
          <HourlyForecast />
          <DailyForecast />
        </div>
      </div>
    </div>
  );
};

export default App;
