import Clock from './components/Clock';
import Speedometer from './components/Speedometer';
import Weather from './components/Weather';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Clock />
      <Speedometer />
      <Weather />
    </div>
  );
}

export default App;
