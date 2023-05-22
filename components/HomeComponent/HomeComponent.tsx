import HomeCategoriesComponent from "../HomeCategoriesComponent/HomeCategoriesComponent"
import styles from "./HomeComponent.module.scss"
// import SliderContainer from "@/containers/SliderContainer/SliderContainer"
import HomeSliderContainer from "@/containers/HomeSliderContainer/HomeSliderContainer"

export default function HomeComponent() {
    return (
        <div className={styles["container-section-home"]}>
            <HomeSliderContainer />
            <h2 className={styles["title-slogan"]}>EL BALANCE PERFECTO ENTRE HIERRO Y MADERA</h2>
            <HomeCategoriesComponent />
        </div>
    )
}