import styles from "./DetailsProductComponent.module.scss"
import DetailsGalleryComponent from "../DetailsGalleryComponent/DetailsGalleryComponent"
import DetailsInfoComponent from "../DetailsInfoComponent/DetailsInfoComponent"
import DetailsDescriptionComponent from "../DetailsDescriptionComponent/DetailsDescriptionComponent"
import DetailsIconComponent from "../DetailsIconComponent/DetailsIconComponent";
import DetailsServicesComponent from "../DetailsServicesComponent/DetailsServicesComponent";

export default function DetailsProductComponent() {


    return (
        <div className={styles["container-section-details"]}>

            <div className={styles["container-row-dividers"]}>
                <DetailsGalleryComponent />
                <DetailsInfoComponent />
            </div>
            <DetailsServicesComponent />
            <DetailsDescriptionComponent />
        </div>
    );
}