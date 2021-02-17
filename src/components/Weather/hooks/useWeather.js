import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const LAT = process.env.REACT_APP_LAT;
const LON = process.env.REACT_APP_LON;

export const useWeather = () => {
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LON}&appid=${API_KEY}&exclude=minutely,hourly,daily,alerts&units=metric`, )
        .then(response => response.json())
        .then(jsonResponse => {
            setWeatherData(jsonResponse);
        });
    }

    useEffect(() => {
        getWeatherData();
    }, [])

    return {
        condition: weatherData?.current.weather[0].description,
        temp: weatherData?.current.temp
    }
}
