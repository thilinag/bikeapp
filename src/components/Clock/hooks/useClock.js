import { useEffect, useState } from 'react';

export const useClock = () => {
    const locale = 'en';
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
        currentTime: currentDate.toLocaleTimeString('en-AU', { hour: 'numeric', minute: 'numeric' })
    }
}
