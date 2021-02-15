import { useSpeedometer } from './hooks/useSpeedometer';
import classes from './Speedometer.module.css';

const Speedometer = () => {
    const {
        hasErrors,
        speed
    } = useSpeedometer();

    return (
        <div className={classes.Speedometer}>
            {hasErrors ? '-' : speed.split('').reverse().join('')}
        </div>
    )
}

export default Speedometer;
