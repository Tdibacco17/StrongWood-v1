import styles from "./DetailsProductComponent.module.scss"
import DetailsInfoComponent from "../DetailsInfoComponent/DetailsInfoComponent"
import DetailsDescriptionComponent from "../DetailsDescriptionComponent/DetailsDescriptionComponent"
import DetailsServicesComponent from "../DetailsServicesComponent/DetailsServicesComponent";
import DetailsGalleryContainer from "@/containers/DetailsGalleryContainer/DetailsGalleryContainer";

export default function DetailsProductComponent() {
    return (
        <div className={styles["container-section-details"]}>
            <div className={styles["container-row-dividers"]}>
                <DetailsGalleryContainer />
                <DetailsInfoComponent />
            </div>
            <DetailsServicesComponent />
            <DetailsDescriptionComponent />
        </div>
    );
}