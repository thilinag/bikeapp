import { useSpeedometer } from './hooks/useSpeedometer';
import './Speedometer.css';

const Speedometer = () => {
    const {
        hasErrors,
        speed
    } = useSpeedometer();

    return (
        <div className="Speedometer">
            {hasErrors ? '-' : speed.split('').reverse().join('')}
        </div>
    )
}

export default Speedometer;
