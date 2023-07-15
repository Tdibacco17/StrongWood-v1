import { DesignDetailContext } from "@/context/DesignDetailProvider"
import { DesignDataContextInterface, SubCategorieDataInterface } from "@/types/Interfaces"
import React, { useContext } from "react"
import styles from "./DesignDetailComponent.module.scss"
import LayoutComponent from "@/layout/LayoutComponent"
import BackLinkUrlComponent from "../BackLinkUrlComponent/BackLinkUrlComponent"
import DesignDetailCarouselComponent from "../DesignDetailCarouselComponent/DesignDetailCarouselComponent"

export default function DesignDetailComponent() {
    const { designData } = useContext(
        DesignDetailContext
    ) as DesignDataContextInterface

    //ELIMINAR CUANDO ESTE
    if (!designData?.subcategories) {
        return (
            <LayoutComponent isSlider={false} urlBack={`/design`}>
                <BackLinkUrlComponent textData={"Categoria en construcción"} backUrl={"/design"} />
            </LayoutComponent>
        )
    }

    return (
        <div className={styles["container-section-subcategories"]}>
            <div className={styles["container-subcategories"]}>
                {designData &&
                    designData.subcategories?.map((e: SubCategorieDataInterface) => {
                        return (
                            <div className={styles["subcategorie"]} key={e.title}>
                                <p className={styles["title"]}>{e.title}</p>
                                <DesignDetailCarouselComponent imagesData={e.images} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}