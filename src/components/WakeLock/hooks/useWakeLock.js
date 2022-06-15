import { useCallback, useEffect, useRef } from 'react';

import useAPIMessages from 'common/hooks/useAPIMessages';

export const useWakeLock = () => {
    const { addMessage } = useAPIMessages();
    const wakeLock = useRef(null);

    const requestWakeLock = useCallback(async() => {
        try {
            wakeLock.current = await navigator.wakeLock.request('screen');
            addMessage('Wakelock: active');
        } catch (err) {
            addMessage(`Wakelock: ${err.message}`);
        }
    }, [addMessage])

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