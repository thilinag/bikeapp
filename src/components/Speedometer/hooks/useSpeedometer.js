import { useEffect, useState, useRef } from 'react';
import { msToKmh } from 'utils/msToKmh';

export const useSpeedometer = () => {

    const [speed, setSpeed] = useState(0);
    const [hasErrors, setHasErrors] = useState(false);
    const [maxSpeed, setMaxSpeed] = useState(0);

    let mounted = useRef(true);
    let watchId = useRef(null);

    const onEvent = event => {
        if (mounted.current) {
            setSpeed(event.coords.speed);
        }
    };

    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(onEvent);
        watchId.current = navigator.geolocation.watchPosition(onEvent,error => { 
                console.error(error);
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
    }, []);

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
