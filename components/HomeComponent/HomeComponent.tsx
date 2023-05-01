import styles from "./HomeComponent.module.scss"
import HomeCategoriesComponent from "../HomeCategoriesComponent/HomeCategoriesComponent"
import HomeSliderContainer from "@/containers/HomeSliderContainer/HomeSliderContainer"

export default function HomeComponent() {
    return (
        <div className={styles["container-section-home"]}>
            <HomeSliderContainer />
            <HomeCategoriesComponent />
        </div>
    )
}