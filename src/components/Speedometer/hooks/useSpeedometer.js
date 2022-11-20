import { useEffect, useState, useRef } from 'react';
import { msToKmh } from 'utils/msToKmh';
import useAPIMessages from 'common/hooks/useAPIMessages';

const ACCURACY_THRESHOLD = 20;

export const useSpeedometer = () => {
    const { addMessage } = useAPIMessages();
    const [speed, setSpeed] = useState(0);
    const [hasErrors, setHasErrors] = useState(false);
    const [maxSpeed, setMaxSpeed] = useState(0);

    let mounted = useRef(true);
    let watchId = useRef(null);

    

    useEffect(() => {
        const onEvent = event => {
            addMessage(event.coords.accuracy);
            if (mounted.current && event.coords.accuracy > ACCURACY_THRESHOLD) {
                setSpeed(event.coords.speed);
            }
        };

        // navigator.geolocation.getCurrentPosition(onEvent);
        watchId.current = navigator.geolocation.watchPosition(onEvent, error => { 
                console.error(error);
                addMessage(`geolocation: ${error.message}`);
                setHasErrors(true);
            },{
            enableHighAccuracy: true,
            timeout: 20000,
            distanceFilter: 1
        });

        return () => {
            mounted.current = false;
            navigator.geolocation.clearWatch(watchId.current);
        };
    }, [addMessage]);

    useEffect(() => {
        if (parseFloat(maxSpeed) < parseFloat(speed)) {
            setMaxSpeed(speed);
        }
    }, [maxSpeed, speed])

    return {
        hasErrors,
        maxSpeed: parseInt(msToKmh(maxSpeed)),
        speed: msToKmh(speed).toFixed(1)
    }
}
