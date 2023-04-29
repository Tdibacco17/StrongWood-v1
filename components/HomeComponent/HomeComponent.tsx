import Image from "next/image"
import styles from "./HomeComponent.module.scss"
import HomeTwoCategoriesComponent from "../HomeTwoCategoriesComponent/HomeTwoCategoriesComponent"
import HomeBannerComponent from "../HomeBannerComponent/HomeBannerComponent"

export default function HomeComponent() {
    return (
        <div className={styles["container-section-home"]}>
            <HomeBannerComponent />
            <HomeTwoCategoriesComponent />
        </div>
    )
}