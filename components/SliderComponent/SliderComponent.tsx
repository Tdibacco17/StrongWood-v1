import styles from "./SliderComponent.module.scss"
import { dataSlider } from "@/models/slider";
import BannerComponent from "../BannerComponent/BannerComponent";

export default function HomeSliderComponent(
    {
        currentIndex,
        handleSlideChange
    }: {
        currentIndex: number,
        handleSlideChange: (index: number) => void;
    }
) {

    const sliderStyle = {
        transform: `translateX(-${currentIndex * 33.333333}%)`,  //translate
    };

    return (
        <div className={styles["container-section-slider"]}>
            <div className={styles["container-slider"]} style={sliderStyle}>
                {
                    dataSlider.map((slide, index) => (
                        <div
                            key={slide.imgSlug}
                            className={`${styles["slide-item"]} ${index === currentIndex ? styles["active"] : ""}`}>
                            <BannerComponent
                                imgSrc={`${slide.imgSrc}`}
                                imgAlt={`${slide.imgAlt}`}
                                originalWidth={slide.originalWidth}
                                originalHeight={slide.originalWidth}
                            />
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