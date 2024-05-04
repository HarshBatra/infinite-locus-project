import React from "react";

const HourlyForecastIcon = () => {
  return (
    <div className="flex flex-col bg-white drop-shadow-md p-2 w-1/6 mx-2 rounded-xl bg-opacity-75 items-center">
      <div className="font-bold text-lg mb-1">21°C</div>
      <div className="text-sm">Wind: </div>
      <div className="text-sm">Humidity: </div>
      <div className="bg-sky-800 h-[0.01rem] w-full mt-2 mb-1"></div>
      <div className="text-xs font-bold">4:00 PM</div>
    </div>
  );
};

const HourlyForecast = () => {
  return (
    <div className="bg-white p-5 rounded-lg drop-shadow-xl bg-opacity-70 gap-4 flex flex-col">
      <div className="text-center font-bold">HourlyForecast</div>
      <div className="flex gap-2">
        <HourlyForecastIcon />
        <HourlyForecastIcon />
        <HourlyForecastIcon />
        <HourlyForecastIcon />
        <HourlyForecastIcon />
        <HourlyForecastIcon />
      </div>
    </div>
  );
};

export default HourlyForecast;
