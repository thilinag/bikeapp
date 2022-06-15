import Clock from 'components/Clock';
import Speedometer from 'components/Speedometer';
import Weather from 'components/Weather';
import MiBand from 'components/MiBand';

import { useApp } from './hooks/useApp'
import classes from './App.module.css';

const App = () => {
  useApp();

  return (
    <div className={classes.App}>
      <Clock />
      <Speedometer />
      <Weather />
      <MiBand />
    </div>
  );
}

export default App;
