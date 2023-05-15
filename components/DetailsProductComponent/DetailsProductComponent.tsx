import { ImgDataInterface, ProductsDataContextInterface } from "@/types/Interfaces"
import styles from "./DetailsProductComponent.module.scss"
import { useContext, useState } from "react"
import { ProductDetailContext } from "@/context/ProductDetailProvider"
import DetailsPrimaryImgComponent from "../DetailsPrimaryImgComponent/DetailsPrimaryImgComponent"
import DetailsCarrouselImgComponent from "../DetailsCarrouselImgComponent/DetailsCarrouselImgComponent"
import PlaceholderImageComponent from "../PlaceholderImageComponent/PlaceholderImageComponent"

export default function DetailsProductComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    const handleImageClick = (index: number) => {
        setActiveImageIndex(index);
    };

    const activeImage: ImgDataInterface | undefined = productData?.detail?.images?.[activeImageIndex];

    return (
        <div className={styles["container-section-details"]}>
            <div className={styles["container-column-dividers"]}>

                <div className={styles["container-section-images"]}>
                    <DetailsPrimaryImgComponent activeImage={activeImage} />

                    <div className={styles["container-section-carrousel"]}>
                        {
                            productData && Object.keys(productData).length > 0 &&
                            productData?.detail?.images?.map((image, index) => {
                                return (
                                    <DetailsCarrouselImgComponent
                                        key={image.imgSlug}
                                        imgSrc={image.imgSrc}
                                        imgAlt={image.imgAlt}
                                        imgProportionsX={image.imgProportionsX ? image.imgProportionsX : 1}
                                        handleImageClick={() => handleImageClick(index)}
                                    />
                                )
                            })
                            //  :
                            // <>
                            //     <div className={styles["container-outer-placeholder"]}>
                            //         <PlaceholderImageComponent />
                            //     </div>
                            //     <div className={styles["container-outer-placeholder"]}>
                            //         <PlaceholderImageComponent />
                            //     </div>
                            //     <div className={styles["container-outer-placeholder"]}>
                            //         <PlaceholderImageComponent />
                            //     </div>
                            // </>
                        }
                    </div>
                </div>

                <div className={styles["container-section-info"]}>
                    <div className="product-detail__info">
                        <h1>{productData?.title}</h1>
                        <p>{productData?.title}</p>
                        <p>Precio: {productData?.price}</p>
                        {productData?.offerPrice && (
                            <p>Precio oferta: {productData?.offerPrice}</p>
                        )}
                        {productData?.offerPercentage && (
                            <p>Descuento: {productData?.offerPercentage}%</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}