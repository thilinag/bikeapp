import { useMiBand } from './hooks/useMiBand';
import classes from './MiBand.module.css';

const MiBand = () => {
    const {
        connectToMiBand,
        heartRate
    } = useMiBand();

    return (
        <div className={classes.MiBand}>
            <div className={classes.HeartRateLabel}>Heart Rate</div>
            {heartRate ? (
                <div>{heartRate}</div>
            ) : (
                <button onClick={connectToMiBand}>_</button>
            )}
        </div>
    )
}

export default MiBand;
