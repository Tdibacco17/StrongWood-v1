import styles from "./HomeSliderComponent.module.scss"
import { useContext } from "react";
import { HomeContext } from "@/context/HomeProvider";
import { HomeDataContextInterface } from "@/types/Interfaces";
import HomeSliderCardComponent from "../HomeSliderCardComponent/HomeSliderCardComponent";

export default function HomeSliderComponent({
    currentIndex,
    handleSlideChange
}: {
    currentIndex: number;
    handleSlideChange: (index: number) => void;
}) {
    const { homeData } = useContext(
        HomeContext
    ) as HomeDataContextInterface;

    return (
        <div className={styles["container-section-slider"]}>
            <div className={styles["container-slider"]} >
                {
                    homeData?.sliderImages?.map((slide, index) => (
                        <div
                            key={slide.imgSlug}
                            className={`${styles["slide-item"]} ${index === currentIndex ? styles["active"] : ""}`}>
                            <HomeSliderCardComponent
                                imgSrc={`${slide.imgSrc}`}
                                imgAlt={`${slide.imgAlt}`}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={styles["container-controls"]}>
                {
                    homeData?.sliderImages?.map((slide, index) => (
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