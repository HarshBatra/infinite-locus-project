import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const CurrentWeather = ({CurrentWeatherdata, ForecastWeatherData}) => {
  return (
    <div className="bg-white p-5 rounded-lg drop-shadow-xl bg-opacity-70 md:w-1/3 flex flex-col gap-8">
      <div className="text-center font-bold">delhi</div>
      <div className="flex justify-around">
        <div className="font-bold text-8xl drop-shadow-xl opacity-60">
          31<span className="text-2xl">°C</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-semibold">Partly Cloudy</div>
          <div>
            <TiWeatherPartlySunny className="w-20 h-20 opacity-60" />
          </div>
        </div>
      </div>
      <div className="flex justify-around my-2">
        <div>Min: 21°C</div>
        <div>Max: 35°C</div>
      </div>
      <div className="flex justify-between">
        <div className="bg-white bg-opacity-75 p-4 rounded-lg drop-shadow-lg flex flex-col items-center">
          <div className="font-bold text-xl">42</div>
          <div>Wind</div>
        </div>
        <div className="bg-white bg-opacity-75 p-4 rounded-lg drop-shadow-lg flex flex-col items-center">
          <div className="font-bold text-xl">42</div>
          <div>Humidity</div>
        </div>
        <div className="bg-white bg-opacity-75 p-4 rounded-lg drop-shadow-lg flex flex-col items-center">
          <div className="font-bold text-xl">42</div>
          <div>Sunrise</div>
        </div>
        <div className="bg-white bg-opacity-75 p-4 rounded-lg drop-shadow-lg flex flex-col items-center">
          <div className="font-bold text-xl">42</div>
          <div>Sunset</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
