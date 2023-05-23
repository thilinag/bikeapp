import { useHeartRate } from "./hooks/useHeartRate";
import classes from "./HeartRate.module.css";

const HeartRate = () => {
  const { connectToDevice, heartRate } = useHeartRate();

  return (
    <div className={classes.HeartRate}>
      <div className={classes.HeartRateLabel}>Heart Rate</div>
      {heartRate ? (
        <div>{heartRate}</div>
      ) : (
        <button onClick={connectToDevice}>_</button>
      )}
    </div>
  );
};

export default HeartRate;
