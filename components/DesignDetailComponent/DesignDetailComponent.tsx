import { DesignDetailContext } from "@/context/DesignDetailProvider"
import { DesignDataContextInterface, ImgDataInterface, SubCategorieDataInterface } from "@/types/Interfaces"
import React, { useContext, useRef } from "react"
import styles from "./DesignDetailComponent.module.scss"
import DesignDetailCardComponent from "../DesignDetailCardComponent/DesignDetailCardComponent"

export default function DesignDetailComponent() {
    const { designData } = useContext(
        DesignDetailContext
    ) as DesignDataContextInterface

    const carouselRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -165, // Ajusta la cantidad de desplazamiento hacia la izquierda para formato mobile
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 165, // Ajusta la cantidad de desplazamiento hacia la derecha para formato mobile
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={styles["container-section-subcategories"]}>
            <div className={styles["container-subcategories"]}>
                {designData &&
                    designData.subcategories.map((e: SubCategorieDataInterface) => {
                        return (
                            <div key={e.title} className={styles["subcategorie"]}>
                                <p>{e.title}</p>
                                <div className={styles["subcategorie-images"]} ref={carouselRef}>
                                    {e.images.map((imgData: ImgDataInterface) => {
                                        return (
                                            <React.Fragment key={imgData.imgSlug}>
                                                <DesignDetailCardComponent imgData={imgData} />
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                                <div>
                                    <button onClick={handleScrollLeft}>izq</button>
                                    <button onClick={handleScrollRight}>der</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}