import styles from "./HomeComponent.module.scss"
import CategoriesComponent from "../CategoriesComponent/CategoriesComponent"
import SliderContainer from "@/containers/SliderContainer/SliderContainer"

export default function HomeComponent() {
    return (
        <div className={styles["container-section-home"]}>
            <SliderContainer />
            <h2 className={styles["title-slogan"]}>EL BALANCE PERFECTO ENTRE HIERRO Y MADERA</h2>
            <CategoriesComponent />
        </div>
    )
}