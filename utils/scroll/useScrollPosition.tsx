import { useEffect, useState, useRef } from 'react';

export const NAVBAR_HEIGHT: number = 80;

export const useScrollPosition = () => {
    const [isAtTop, setIsAtTop] = useState<boolean>(true);

    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [previousPosition, setPreviousPosition] = useState<number>(0);
    const scrollPositionRef = useRef<number>(0);

    useEffect(() => {
        const updatePosition = () => {
            const currentPosition = window.pageYOffset;
            setPreviousPosition(scrollPositionRef.current);
            scrollPositionRef.current = currentPosition;
            setScrollPosition(currentPosition);

            if (currentPosition === 0) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        };

        window.addEventListener('scroll', updatePosition);
        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return {
        isScrolled: scrollPosition > previousPosition ? -NAVBAR_HEIGHT : 0,
        isAtTop,
    };
};