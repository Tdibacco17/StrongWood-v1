import styles from "./SliderComponent.module.scss"
import { useContext } from "react";
import { HomeContext } from "@/context/HomeProvider";
import { HomeDataContextInterface } from "@/types/Interfaces";
import SliderCardComponent from "../SliderCardComponent/SliderCardComponent";

export default function HomeSliderComponent(
    {
        currentIndex,
        handleSlideChange
    }: {
        currentIndex: number,
        handleSlideChange: (index: number) => void;
    }
) {
    const { homeData } = useContext(
        HomeContext
    ) as HomeDataContextInterface;

    return (
        <div className={styles["container-section-slider"]}>
            <div className={styles["container-slider"]} >
                {
                    homeData && homeData.sliderImages.map((slide, index) => (
                        <div
                            key={slide.imgSlug}
                            className={`${styles["slide-item"]} ${index === currentIndex ? styles["active"] : ""}`}>
                            <SliderCardComponent
                                imgSrc={`${slide.imgSrc}`}
                                imgAlt={`${slide.imgAlt}`}
                                imgProportionsX={slide.imgProportionsX}
                                imgProportionsY={slide.imgProportionsY}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={styles["container-controls"]}>
                {
                    homeData && homeData.sliderImages.map((slide, index) => (
                        <button
                            key={slide.imgSlug}
                            onClick={() => handleSlideChange(index)}
                            className={`${styles["control-item"]} ${index === currentIndex ? styles["active"] : ""}`}
                            aria-label={index === currentIndex ? `Imagen actual ${index + 1}` : `Cambiar a imagen ${index + 1}`}>
                        </button>
                    ))
                }
            </div>
            <style jsx>{`
                .${styles["container-section-slider"]} .${styles["container-slider"]} {
                    transform: translateX(-${currentIndex * 33.333333}%);
                }
            `}</style>
        </div>
    );
}

/* 
        
                .${styles["container-section-slider"]} .${styles["container-inner-image"]} {
                    min-height: calc(var(--banner-image-outer-width) * ${homeData?.sliderImages[0].imgProportionsY});
                    max-height: calc(var(--banner-image-outer-width) * ${homeData?.sliderImages[0].imgProportionsY});
                }


 "--original-width": `${originalWidth}`,
        "--original-height": `${originalHeight}`,
        "--banner-image-inner-width-height": isPortrait ? "100vh" : "100vw",
        "--banner-image-proportion": isPortrait
            ? `calc((var(--banner-image-inner-width-height)) * (var(--original-height)) / (var(--original-width)));
            .container-inner-image {
                position: relative;
                min-height: 75vh;
                max-height: 75vh;
                min-width: var(--banner-image-proportion);
                max-width: var(--banner-image-proportion);
            }`
            : `calc((var(--banner-image-inner-width-height)) * (var(--original-height)) / (var(--original-width)));
            .container-inner-image {
                position: relative;
                min-height: var(--banner-image-proportion);
                max-height: var(--banner-image-proportion);
                min-width: 100vw;
                max-width: 100vw;
            }`,
*/