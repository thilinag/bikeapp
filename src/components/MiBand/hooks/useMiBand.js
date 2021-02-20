import { useState } from 'react';
import { parseHeartRate } from 'utils/parseHeartRate';

export const useMiBand = () => {
    const [heartRate, setHeartRate] = useState(null);

    const handleCharacteristicValueChanged = event => {
        const value = event.target.value;
        setHeartRate(parseHeartRate(value));
    }

    const connectToMiBand = () => {
        navigator.bluetooth.requestDevice({
            filters: [{ services: [0xFEE0] }]
        })
            .then(device => device.gatt.connect())
            .then(server => server.getPrimaryService('heart_rate'))
            .then(service => service.getCharacteristic('heart_rate_measurement'))
            .then(characteristic => characteristic.startNotifications())
            .then(characteristic => {
                characteristic.addEventListener('characteristicvaluechanged',
                    handleCharacteristicValueChanged);
                console.log('Notifications started');
            })
            .catch(error => { console.error(error); });        
    }

    return {
        connectToMiBand,
        heartRate
    }
}
