import { useSpeedometer } from './hooks/useSpeedometer';
import classes from './Speedometer.module.css';

const Speedometer = () => {
    const {
        hasErrors,
        maxSpeed,
        speed
    } = useSpeedometer();

    return (
        <>
            <div className={classes.Speedometer}>
                <div className={classes.Speed}>
                    {hasErrors ? '-' : speed.split('').reverse().join('')}
                </div>
            </div>
            {maxSpeed > 0 && (
                <div className={classes.MaxSpeed}>
                    <div className={classes.MaxSpeedLabel}>Max</div>
                    <div>{maxSpeed}<small className={classes.MaxSpeedLabel}>KM/H</small></div>
                </div>
            )}
        </>
    )
}

export default Speedometer;
