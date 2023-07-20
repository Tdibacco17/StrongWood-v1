import { DesignDetailContext } from "@/context/DesignDetailProvider"
import { DesignDataContextInterface, SubCategorieDataInterface } from "@/types/Interfaces"
import React, { useContext } from "react"
import styles from "./DesignDetailComponent.module.scss"
import DesignDetailCarouselContainer from "@/containers/DesignDetailCarouselContainer/DesignDetailCarouselContainer"
import Image from "next/image"

export default function DesignDetailComponent() {
    const { designData } = useContext(
        DesignDetailContext
    ) as DesignDataContextInterface

    return (
        <div className={styles["container-section-subcategories"]}>
            <div className={styles["container-subcategories"]}>
                {designData &&
                    designData.subcategories?.map((e: SubCategorieDataInterface) => {
                        return (
                            <div className={styles["subcategorie"]} key={e.title}>
                                <DesignDetailCarouselContainer titleCategorie={e.title} imagesData={e.images} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}