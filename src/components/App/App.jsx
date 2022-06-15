import Clock from 'components/Clock';
import Speedometer from 'components/Speedometer';
import Weather from 'components/Weather';
import MiBand from 'components/MiBand';
import WakeLock from 'components/WakeLock';
import APIMessagesNotification from 'components/APIMessagesNotification';

import APIErrorProvider from 'common/providers/APIMessageProvider';

import classes from './App.module.css';

const App = () => {
  return (
    <APIErrorProvider>
      <div className={classes.App}>
        <WakeLock />
        <APIMessagesNotification />
        <Clock />
        <Speedometer />
        <Weather />
        <MiBand />
      </div>
    </APIErrorProvider>
  );
}

export default App;
