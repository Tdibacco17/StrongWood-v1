import styles from "./HomeComponent.module.scss"
import HomeTwoCategoriesComponent from "../HomeTwoCategoriesComponent/HomeTwoCategoriesComponent"
import HomeSliderComponent from "../HomeSliderComponent/HomeSliderComponent"

export default function HomeComponent() {
    return (
        <div className={styles["container-section-home"]}>
            <HomeSliderComponent />
            <HomeTwoCategoriesComponent />
        </div>
    )
}