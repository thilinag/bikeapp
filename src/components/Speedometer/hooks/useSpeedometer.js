import { useEffect, useState } from 'react';

export const useSpeedometer = () => {

    const [speed, setSpeed] = useState(0);

    const success = (position) => {
        if(position.coords.speed) {
            setSpeed(parseInt(position.coords.speed * 3.6 ))
        }
    }

    useEffect(() => {
        navigator.geolocation.watchPosition(success)
    }, [])

    return {
        speed
    }
}