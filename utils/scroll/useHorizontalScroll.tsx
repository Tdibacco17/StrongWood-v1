import { useEffect, useRef, WheelEvent } from 'react';

const useHorizontalScroll = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleWheelScroll = (event: WheelEvent<HTMLDivElement>) => {
            event.preventDefault();
            const container = scrollRef.current;
            if (container) {
                const delta = Math.sign(event.deltaY);
                const scrollAmount = 250; // Cantidad de desplazamiento horizontal por paso
                const smoothScrollAmount = 10; // Cantidad de pasos para un desplazamiento suave
                const targetScrollLeft = container.scrollLeft + delta * scrollAmount;
                smoothScroll(container, container.scrollLeft, targetScrollLeft, smoothScrollAmount);
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

const smoothScroll = (element: HTMLElement, start: number, target: number, duration: number) => {
    const startTime = performance.now();
    const step = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const scrollLeft = easeInOutQuad(progress, start, target - start, 1);
        element.scrollLeft = scrollLeft;
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };
    requestAnimationFrame(step);
};

const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
};

export default useHorizontalScroll;
