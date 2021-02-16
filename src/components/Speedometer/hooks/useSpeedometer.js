import { useEffect, useState } from 'react';

export const useSpeedometer = () => {

    const [speed, setSpeed] = useState('0.0');
    const [hasErrors, setHasErrors] = useState(false);
    const [maxSpeed, setMaxSpeed] = useState(0);

    const success = (position) => {
        const currentSpeed = position.coords.speed;

        if (currentSpeed) {
            // speed is in meters per second
            setSpeed((currentSpeed / 1000 * 60 * 60).toFixed(1));
            if (maxSpeed < currentSpeed) {
                setMaxSpeed(parseInt(currentSpeed / 1000 * 60 * 60));
            }
            setHasErrors(false);
        }
    }

    useEffect(() => {
        navigator.geolocation.watchPosition(
            success,
            error => { 
                console.error(error);
                setHasErrors(true);
            },{
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
            distanceFilter: 1
        })
    }, []);

    return {
        hasErrors,
        maxSpeed,
        speed
    }
}
