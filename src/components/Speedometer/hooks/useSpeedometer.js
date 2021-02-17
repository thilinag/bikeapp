import { useEffect, useState } from 'react';

export const useSpeedometer = () => {

    const [speed, setSpeed] = useState('0.0');
    const [hasErrors, setHasErrors] = useState(false);
    const [maxSpeed, setMaxSpeed] = useState(0);

    useEffect(() => {
        navigator.geolocation.watchPosition(
            position => {
                const currentSpeed = position.coords.speed;
                if (currentSpeed) {
                    // speed is in meters per second
                    setSpeed(currentSpeed);
                    if (maxSpeed < currentSpeed) {
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
            maximumAge: 1000,
            distanceFilter: 5
        })
    }, [maxSpeed]);

    return {
        hasErrors,
        maxSpeed: parseInt(maxSpeed / (1000 * 60 * 60)),
        speed: (speed / 1000 * 60 * 60).toFixed(1)
    }
}
