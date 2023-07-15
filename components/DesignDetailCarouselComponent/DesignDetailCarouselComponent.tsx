import styles from "./DesignDetailCarouselComponent.module.scss"
import { ImgDataInterface } from "@/types/Interfaces";

import DesignDetailCardComponent from "../DesignDetailCardComponent/DesignDetailCardComponent";
import useHorizontalScroll from "@/utils/scroll/useHorizontalScroll";

export default function DesignDetailCarouselComponent({
    imagesData,

}: {
    imagesData: ImgDataInterface[];
}) {

    const scrollRef = useHorizontalScroll();

    return (
        <div className={styles["container-section-carousel-subcategories"]} >
            <div className={styles["carousel-subcategories"]} ref={scrollRef}>
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
            </div>
        </div>
    )
}