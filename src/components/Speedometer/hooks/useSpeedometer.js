import { useEffect, useState } from 'react';
import { msToKmh } from 'utils/msToKmh';

export const useSpeedometer = () => {

    const [speed, setSpeed] = useState('0.0');
    const [hasErrors, setHasErrors] = useState(false);
    const [maxSpeed, setMaxSpeed] = useState(0);

    useEffect(() => {
        navigator.geolocation.watchPosition(
            position => {
                const currentSpeed = position.coords.speed;
                if (currentSpeed && currentSpeed > 0.25) {
                    // speed is in meters per second
                    setSpeed(currentSpeed);
                    if (parseFloat(maxSpeed) < parseFloat(currentSpeed)) {
                        setMaxSpeed(currentSpeed);
                    }
                    setHasErrors(false);
                }
            },
            error => { 
                console.error(error);
                setHasErrors(true);
            },{
            enableHighAccuracy: true,
            timeout: 20000,
            distanceFilter: 1
        })
    }, [maxSpeed]);

    return {
        hasErrors,
        maxSpeed: parseInt(msToKmh(maxSpeed)),
        speed: msToKmh(speed).toFixed(1)
    }
}
