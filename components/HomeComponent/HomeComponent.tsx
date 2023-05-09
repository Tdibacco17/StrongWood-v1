import styles from "./HomeComponent.module.scss"
import CategoriesComponent from "../CategoriesComponent/CategoriesComponent"
import SliderContainer from "@/containers/SliderContainer/SliderContainer"

export default function HomeComponent() {
    return (
        <div className={styles["container-section-home"]}>
            <SliderContainer />
            <CategoriesComponent />
        </div>
    )
}