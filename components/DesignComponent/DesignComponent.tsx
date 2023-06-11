import DesignCardCategoriesComponent from "../DesignCardCategoriesComponent/DesignCardCategoriesComponent"
import styles from "./DesignComponent.module.scss"

export default function DesignComponent() {
    return (
        <div className={styles["container-section-design"]}>
            <div className={styles["container-cards-categories"]}>
                {/* <DesignCardCategoriesComponent title={"Cocina"}/>
                <DesignCardCategoriesComponent title={"Dormitorio"}/>
                <DesignCardCategoriesComponent title={"Baño"}/>
                <DesignCardCategoriesComponent title={"Cocina"}/>
                <DesignCardCategoriesComponent title={"Cocina"}/>
                <DesignCardCategoriesComponent title={"Cocina"}/> */}
            </div>
        </div>
    )
}