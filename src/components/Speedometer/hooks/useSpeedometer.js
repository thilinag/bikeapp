import { useEffect, useState } from 'react';

export const useSpeedometer = () => {

    const [speed, setSpeed] = useState(0);

    const success = (position) => {
        if(position.coords.speed) {
            setSpeed(position.coords.speed)
        }
    }

    useEffect(() => {
        navigator.geolocation.watchPosition(success)
    }, [])

    return {
        speed
    }
}