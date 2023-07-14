import styles from "./DesignDetailCarouselComponent.module.scss"
import { ImgDataInterface } from "@/types/Interfaces";

import DesignDetailCardComponent from "../DesignDetailCardComponent/DesignDetailCardComponent";
import Image from "next/image";
import useHorizontalScroll from "@/utils/scroll/useHorizontalScroll";

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
            <div className={styles["buttons-subcategories"]}>
                <button className={styles["buttons"]} onClick={handleScrollLeft}>
                    <Image
                        src="/assets/icons/arrowLeft.svg"
                        alt="Icono Izquierda"
                        width={15}
                        height={15}
                        loading="lazy"
                    />
                </button>
                <button className={styles["buttons"]} onClick={handleScrollRight}>
                    <Image
                        src="/assets/icons/arrowRight.svg"
                        alt="Icono Derecha"
                        width={15}
                        height={15}
                        loading="lazy"
                    />
                </button>
            </div>
        </div>
    )
}