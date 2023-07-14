import { useEffect, useRef, WheelEvent } from 'react';

const useHorizontalScroll = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleWheelScroll = (event: WheelEvent<HTMLDivElement>) => {
            event.preventDefault();
            const container = scrollRef.current;
            if (container) {
                const delta = Math.sign(event.deltaY);
                container.scrollLeft += delta * 250; // Ajusta la cantidad de desplazamiento horizontal aquí
            }
        };

        const containerElement = scrollRef.current;
        if (containerElement) {
            containerElement.addEventListener('wheel', (handleWheelScroll as unknown) as EventListener, { passive: false });
        }

        return () => {
            if (containerElement) {
                containerElement.removeEventListener('wheel', (handleWheelScroll as unknown) as EventListener);
            }
        };
    }, []);

    return scrollRef;
};

export default useHorizontalScroll;
