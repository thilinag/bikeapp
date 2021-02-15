import Speedometer from './components/Speedometer';
import Clock from './components/Clock';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.ClockWrapper}>
        <Clock />
      </div>
      <div className={classes.SpeedometerWrapper}>
        <Speedometer />
      </div>
    </div>
  );
}

export default App;
