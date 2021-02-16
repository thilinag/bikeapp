import { useWeather } from './hooks/useWeather';
import classes from './Weather.module.css';

const Weather = () => {
    const {
        condition,
        temp
    } = useWeather();

    return (
        <div className={classes.Weather}>
            <div className={classes.Condition}>{condition}</div>
            {temp && (
                <div className={classes.Temp}>{`${parseInt(temp)}'C`}</div>
            )}
        </div>
    )
}

export default Weather;
