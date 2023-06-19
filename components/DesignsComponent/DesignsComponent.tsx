import { DesignsContext } from "@/context/DesignsContextProvider"
import styles from "./DesignsComponent.module.scss"
import { DesignDataContextInterface } from "@/types/Interfaces"
import { useContext } from "react"
import DesignsCardCategorieComponent from "../DesignsCardCategorieComponent/DesignsCardCategorieComponent"

export default function DesignsComponent() {
    const { designsData } = useContext(
        DesignsContext
    ) as DesignDataContextInterface

    return (
        <div className={styles["container-section-design"]}>
            <div className={styles["container-cards-categories"]}>
                {designsData && Object.keys(designsData).length > 0 &&
                    (
                        Object.keys(designsData).map((productKey: string) => {
                            return (
                                <DesignsCardCategorieComponent
                                    key={productKey}
                                    designCategorie={designsData[productKey]} />
                            );
                        })
                    )
                }
            </div>
        </div>
    )
}