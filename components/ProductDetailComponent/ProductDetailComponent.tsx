import styles from "./ProductDetailComponent.module.scss"
import ProductDetailInfoComponent from "../ProductDetailInfoComponent/ProductDetailInfoComponent"
import ProductDetailDescriptionComponent from "../ProductDetailDescriptionComponent/ProductDetailDescriptionComponent"
import ProductDetailServicesComponent from "../ProductDetailServicesComponent/ProductDetailServicesComponent";
import ProductDetailGalleryContainer from "@/containers/ProductDetailGalleryContainer/ProductDetailGalleryContainer";

export default function ProductDetailComponent() {

    return (
        <div className={styles["container-section-details"]}>
            <div className={styles["container-row-dividers"]}>
                <ProductDetailGalleryContainer />
                <ProductDetailInfoComponent />
            </div>
            <ProductDetailDescriptionComponent />
            <ProductDetailServicesComponent />
        </div>
    );
}