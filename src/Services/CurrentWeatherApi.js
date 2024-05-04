import React, {useState, useEffect} from "react";
import CurrentWeather from "../Components/CurrentWeather";

const CurrentWeatherApi = (city) => {
  const [data, setData] = useState({})
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=6cef9f56aac048eab7d65200240405&q=${city}&aqi=no&alerts=no
        `)
        .then((res) => res.json())
        .then((res) => setData(res[CurrentWeather]))
    }, [city])
    
    return data
};

export default CurrentWeatherApi;
