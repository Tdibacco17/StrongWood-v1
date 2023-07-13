import styles from "./ProductDetailComponent.module.scss"
import ProductDetailInfoComponent from "../ProductDetailInfoComponent/ProductDetailInfoComponent"
import ProductDetailDescriptionComponent from "../ProductDetailDescriptionComponent/ProductDetailDescriptionComponent"
import ProductDetailServicesComponent from "../ProductDetailServicesComponent/ProductDetailServicesComponent";
import ProductDetailGalleryContainer from "@/containers/ProductDetailGalleryContainer/ProductDetailGalleryContainer";
import { useContext } from "react";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/Interfaces";
import LayoutComponent from "@/layout/LayoutComponent";
import BackLinkUrlComponent from "../BackLinkUrlComponent/BackLinkUrlComponent";

export default function ProductDetailComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    if (productData === undefined) {
        return (
            <LayoutComponent isSlider={false} urlBack={`/products`}>
                <BackLinkUrlComponent textData={"Este producto no existe"} backUrl={"/products"} />
            </LayoutComponent>
        )
    }

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