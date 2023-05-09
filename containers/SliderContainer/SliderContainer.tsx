import HomeSliderComponent from "@/components/SliderComponent/SliderComponent";
import { dataSlider } from "@/models/slider";
import { useEffect, useRef, useState } from "react";

export default function SliderContainer() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const numSlides = dataSlider.length;
    const timeInterval = 3000;
    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        // Iniciamos el temporizador para cambiar de imagen cada 5 segundos
        timerRef.current = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % numSlides);
        }, timeInterval);

        // Limpiamos el temporizador cuando el componente se desmonte
        return () => clearInterval(timerRef.current);
    }, [currentIndex, numSlides]);

    const handleSlideChange = (index: number) => {
        // Detenemos el temporizador actual
        clearInterval(timerRef.current);

        // Actualizamos el índice actual
        setCurrentIndex(index);

        // Iniciamos el temporizador nuevamente
        timerRef.current = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % numSlides);
        }, timeInterval);
    };


    return <HomeSliderComponent currentIndex={currentIndex} handleSlideChange={handleSlideChange} />
}