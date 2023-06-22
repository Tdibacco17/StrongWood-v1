import styles from "./DesignDetailCarouselComponent.module.scss"
import { ImgDataInterface } from "@/types/Interfaces";

import DesignDetailCardComponent from "../DesignDetailCardComponent/DesignDetailCardComponent";

export default function DesignDetailCarouselComponent({
    imagesData,
    carouselRef,
    handleScrollLeft,
    handleScrollRight
}: {
    imagesData: ImgDataInterface[];
    carouselRef: React.RefObject<HTMLDivElement>;
    handleScrollLeft: () => void;
    handleScrollRight: () => void;
}) {
    console.log("[imgData]: ", imagesData)

    return (
        <div className={styles["container-section-carousel-subcategories"]} ref={carouselRef}>
            {
                imagesData && imagesData.map((imgData: ImgDataInterface) => {
                    return (
                        <DesignDetailCardComponent
                            key={imgData.imgSlug}
                            imgData={imgData}
                        />
                    )
                })
            }
            <button onClick={handleScrollLeft}>IZQUIERDA</button>
            <button onClick={handleScrollRight}>DERECHA</button>
        </div>
    )
}