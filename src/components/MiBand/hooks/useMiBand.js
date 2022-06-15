import { useState } from 'react';
import { parseHeartRate } from 'utils/parseHeartRate';
import useAPIMessages from 'common/hooks/useAPIMessages';

export const useMiBand = () => {
    const { addMessage } = useAPIMessages();
    const [heartRate, setHeartRate] = useState(null);

    const handleCharacteristicValueChanged = event => {
        const value = event.target.value;
        setHeartRate(parseHeartRate(value));
    }

    const connectToMiBand = () => {
        navigator.bluetooth.requestDevice({
            filters: [{ services: [0xFEE0] }],
            optionalServices: ['0000180d-0000-1000-8000-00805f9b34fb']
        })
            .then(device => device.gatt.connect())
            .then(server => server.getPrimaryService('heart_rate'))
            .then(service => service.getCharacteristic('heart_rate_measurement'))
            .then(characteristic => characteristic.startNotifications())
            .then(characteristic => {
                characteristic.addEventListener('characteristicvaluechanged',
                    handleCharacteristicValueChanged);
                console.log('Notifications started');
                addMessage('MiBand: Notifications started');
            })
            .catch(error => {
                addMessage(`MiBand: ${error.message}`)
                console.error(error); 
            });        
    }

    return {
        connectToMiBand,
        heartRate
    }
}
