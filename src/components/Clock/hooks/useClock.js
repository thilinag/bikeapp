import { useEffect, useState } from 'react';

const LOCALE = process.env.REACT_APP_LOCALE;

export const useClock = () => {
    const [currentDate, setCurrentDate] = useState(new Date()); // Save the current date to be able to trigger an update

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return {
        currentTime: currentDate.toLocaleTimeString(LOCALE, { hour: 'numeric', minute: 'numeric', hour12: false })
    }
}
