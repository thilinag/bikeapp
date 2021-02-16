import { useEffect, useState } from 'react';

export const useWeather = () => {
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherData = () => {
        fetch(
            'https://wttr.in/Adelaide?format=j1'
        )
        .then(response => response.json())
        .then(jsonResponse => {
            setWeatherData(jsonResponse);
        });
    }

    useEffect(() => {
        getWeatherData();
    }, [])

    return {
        condition: weatherData?.current_condition[0].weatherDesc[0].value,
        temp: weatherData?.current_condition[0].FeelsLikeC,
        rain: weatherData?.current_condition[0].precipMM,
    }
}
