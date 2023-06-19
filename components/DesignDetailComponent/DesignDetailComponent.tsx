import { DesignDetailContext } from "@/context/DesignDetailProvider"
import { DesignDataContextInterface } from "@/types/Interfaces"
import { useContext } from "react"
import styles from "./DesignDetailComponent.module.scss"

export default function DesignDetailComponent() {
    const { designData } = useContext(
        DesignDetailContext
    ) as DesignDataContextInterface

    console.log(designData)
    return (
        <div className={styles["container-section-subcategories"]}>
            {designData && designData.title}
        </div>
    )
}