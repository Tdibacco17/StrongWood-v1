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
            {homeData?.sliderImages && (
                <>
                    <HomeSliderCardComponent
                        imgSrc={homeData.sliderImages[currentIndex].imgSrc}
                        imgAlt={homeData.sliderImages[currentIndex].imgAlt}
                        imgProportionsX={homeData.sliderImages[currentIndex].imgProportionsX}
                        imgProportionsY={homeData.sliderImages[currentIndex].imgProportionsY}
                    />

                </>
            )}
            <div className={styles["slider-buttons"]}>
                {homeData?.sliderImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={currentIndex === index ?
                            `${styles["btn-item"]} ${styles["active"]}`
                            : styles["btn-item"]} />
                ))}
            </div>
        </div >
    );
}