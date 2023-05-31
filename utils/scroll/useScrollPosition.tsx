import { useEffect, useState, useRef } from 'react';

export const NAVBAR_HEIGHT: number = 57.6; // 3.6rem

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

            if (currentPosition <= NAVBAR_HEIGHT) {
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