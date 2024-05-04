import React from "react";

const ForcastWeatherApi = ({city}) => {
  const [data, setData] = useState({})
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=6cef9f56aac048eab7d65200240405&q=${city}&days=3&aqi=no&alerts=no
        `)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [city])
    return data
};

export default ForcastWeatherApi;