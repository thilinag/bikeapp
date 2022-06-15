import { useCallback, useEffect, useRef } from 'react';

export const useApp = () => {
    const wakeLock = useRef(null);

    const requestWakeLock = useCallback(async() => {
        try {
            wakeLock.current = await navigator.wakeLock.request('screen');
            console.log('wakelock active')
        } catch (err) {
            console.error(err);
        }
    }, [])

    const releaseWakeLock = useCallback(async() => {
        if(wakeLock.current) {
            wakeLock.current.release();
        }
    }, [])

    useEffect(() => {
        requestWakeLock();

        return () => {
            releaseWakeLock();
        }
    }, [requestWakeLock, releaseWakeLock])
}