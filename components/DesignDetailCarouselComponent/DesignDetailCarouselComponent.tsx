import styles from "./DesignDetailCarouselComponent.module.scss"
import { ImgDataInterface } from "@/types/Interfaces";

import DesignDetailCardComponent from "../DesignDetailCardComponent/DesignDetailCardComponent";
import Image from "next/image";

export default function DesignDetailCarouselComponent({
    imagesData,
    carouselRef,
    handleScrollLeft,
    handleScrollRight,
    titleCategorie
}: {
    imagesData: ImgDataInterface[];
    carouselRef: React.RefObject<HTMLDivElement>;
    handleScrollLeft: () => void,
    handleScrollRight: () => void,
    titleCategorie: string
}) {

    return (
        <>
            <div className={styles["subcategorie-header"]}>
                <p className={styles["title"]}>{titleCategorie}</p>
                <div className={styles['buttons-subcategories']}>
                    <button
                        className={styles['buttons']}
                        onClick={handleScrollLeft}>
                        <Image
                            src="/assets/icons/arrowLeft.svg"
                            alt="Icono Izquierda"
                            width={15}
                            height={15}
                            loading="lazy"
                        />
                    </button>
                    <button
                        className={styles['buttons']}
                        onClick={handleScrollRight}>
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
            <div className={styles["container-section-carousel-subcategories"]} >
                <div className={styles["carousel-subcategories"]} ref={carouselRef}>
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
        </>
    )
}