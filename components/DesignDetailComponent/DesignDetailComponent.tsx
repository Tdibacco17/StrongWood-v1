import { DesignDetailContext } from "@/context/DesignDetailProvider"
import { DesignDataContextInterface, ImgDataInterface, SubCategorieDataInterface } from "@/types/Interfaces"
import React, { useContext } from "react"
import styles from "./DesignDetailComponent.module.scss"
import DesignDetailCardComponent from "../DesignDetailCardComponent/DesignDetailCardComponent"

export default function DesignDetailComponent() {
    const { designData } = useContext(
        DesignDetailContext
    ) as DesignDataContextInterface

    console.log(designData)
    return (
        <div className={styles["container-section-subcategories"]}>
            <div className={styles["container-subcategories"]}>
                {designData &&
                    designData.subcategories.map((e: SubCategorieDataInterface) => {
                        return (
                            <div key={e.title} className={styles["subcategorie"]}>
                                <p>{e.title}</p>
                                <div className={styles["subcategorie-images"]}>
                                    {e.images.map((imgData: ImgDataInterface) => {
                                        return (
                                            <React.Fragment key={imgData.imgSlug}>
                                                <DesignDetailCardComponent imgData={imgData} />
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}