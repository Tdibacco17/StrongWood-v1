import { useState, useEffect } from 'react';

type WindowSize = {
    width: number;
    height: number;
};

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth || 0,
                height: window.innerHeight || 0,
            });
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};