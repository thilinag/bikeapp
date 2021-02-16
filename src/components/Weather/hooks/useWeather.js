import { useEffect, useState } from 'react';

export const useWeather = () => {
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherData = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=2078025&appid=79379dd3d5b45e86b5877a0228391bfd&units=metric', )
        .then(response => response.json())
        .then(jsonResponse => {
            setWeatherData(jsonResponse);
        });
    }

    useEffect(() => {
        getWeatherData();
    }, [])

    return {
        condition: weatherData?.weather[0].description,
        temp: weatherData?.main.feels_like
    }
}
