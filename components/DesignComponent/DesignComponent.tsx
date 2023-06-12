import { DesignCategoriesContext } from "@/context/DesignCategoriesContextProvider"
import styles from "./DesignComponent.module.scss"
import { DesignDataContextInterface } from "@/types/Interfaces"
import { useContext } from "react"
import DesignCardCategorieComponent from "../DesignCardCategorieComponent/DesignCardCategorieComponent"

export default function DesignComponent() {
    const { designCategorieData } = useContext(
        DesignCategoriesContext
    ) as DesignDataContextInterface

    return (
        <div className={styles["container-section-design"]}>
            <div className={styles["container-cards-categories"]}>
                {designCategorieData && Object.keys(designCategorieData).length > 0 &&
                    (
                        Object.keys(designCategorieData).map((productKey: string) => {
                            return (
                                <DesignCardCategorieComponent
                                    key={productKey}
                                    designCategorie={designCategorieData[productKey]} />
                            );
                        })
                    )
                }
            </div>
        </div>
    )
}