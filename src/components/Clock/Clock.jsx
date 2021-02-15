import { useClock } from './hooks/useClock';
import classes from './Clock.module.css';

const Clock = () => {
    const {
        currentTime
    } = useClock();

    return (
        <div className={classes.Clock}>
            {currentTime}
        </div>
    )
}

export default Clock;
