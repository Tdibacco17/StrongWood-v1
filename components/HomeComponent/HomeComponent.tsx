import styles from "./HomeComponent.module.scss"
import CategoriesComponent from "../CategoriesComponent/CategoriesComponent"
// import SliderContainer from "@/containers/SliderContainer/SliderContainer"
import HomeSliderComponent from "../SliderComponent/SliderComponent"

export default function HomeComponent() {
    return (
        <div className={styles["container-section-home"]}>
            <HomeSliderComponent />
            <h2 className={styles["title-slogan"]}>EL BALANCE PERFECTO ENTRE HIERRO Y MADERA</h2>
            <CategoriesComponent />
        </div>
    )
}