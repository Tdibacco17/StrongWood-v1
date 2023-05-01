import Image from "next/image";
import styles from "./HomeSliderComponent.module.scss"

import { dataSlider } from "@/models/slider";
import { useEffect, useState } from "react";

export default function HomeSliderComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const numSlides = dataSlider.length;
    const timeInterval = 3000;
    let timer: NodeJS.Timeout | undefined;

    useEffect(() => {
        // Iniciamos el temporizador para cambiar de imagen cada 5 segundos
        timer = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % numSlides);
        }, timeInterval);

        // Limpiamos el temporizador cuando el componente se desmonte
        return () => clearInterval(timer);
    }, [currentIndex, numSlides]);

    const handleSlideChange = (index: number) => {
        // Detenemos el temporizador actual
        clearInterval(timer);

        // Actualizamos el índice actual
        setCurrentIndex(index);

        // Iniciamos el temporizador nuevamente
        timer = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % numSlides);
        }, timeInterval);
    };

    const sliderStyle = {
        transform: `translateX(-${currentIndex * 33.333333}%)`,  //translate
        // opacity: `${5 / numSlides}`,
    };

    return (
        <div className={styles["container-section-slider"]}>
            <div className={styles["container-slider"]} style={sliderStyle}>
                {
                    dataSlider.map((slide, index) => (
                        <div
                            key={slide.imgSlug}
                            className={`${styles["slide-item"]} ${index === currentIndex ? styles["active"] : ""}`}>
                            <div className={styles["container-outer-image"]}>
                                <div className={styles["container-inner-image"]}>
                                    <Image
                                        src={`${slide.imgSrc}`}
                                        alt="Imagen slider"
                                        fill />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={styles["container-controls"]}>
                {
                    dataSlider.map((slide, index) => (
                        <button
                            key={slide.imgSlug}
                            onClick={() => handleSlideChange(index)}
                            className={`${styles["control-item"]} ${index === currentIndex ? styles["active"] : ""}`}>
                        </button>
                    ))
                }
            </div>
        </div>
    );
}