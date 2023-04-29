import { useEffect, useState, useRef } from 'react';

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [previousPosition, setPreviousPosition] = useState<number>(0);
    const scrollPositionRef = useRef<number>(0);

    useEffect(() => {
        const updatePosition = () => {
            const currentPosition = window.pageYOffset;
            setPreviousPosition(scrollPositionRef.current);
            scrollPositionRef.current = currentPosition;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', updatePosition);
        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return  scrollPosition > previousPosition ? -80 : 0;
};

export default useScrollPosition;