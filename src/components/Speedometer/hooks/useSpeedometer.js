import { useEffect, useState } from 'react';

export const useSpeedometer = () => {

    const [speed, setSpeed] = useState('0.0');
    const [hasErrors, setHasErrors] = useState(false);

    const success = (position) => {
        if(position.coords.speed) {
            // speed is in meters per second
            setSpeed((position.coords.speed / 1000 * 60 * 60).toFixed(1));
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
        speed
    }
}
