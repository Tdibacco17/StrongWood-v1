import { useContext, useEffect, useRef, useState } from "react";
import DetailsPrimaryImgComponent from "../DetailsPrimaryImgComponent/DetailsPrimaryImgComponent"
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ImgDataInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import styles from "./DetailsGalleryComponent.module.scss"
import DetailsCarouselImgComponent from "../DetailsCarouselImgComponent/DetailsCarouselImgComponent";

export default function DetailsGalleryComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    const handleImageClick = (index: number) => {
        setActiveImageIndex(index);
    };

    const activeImage: ImgDataInterface | undefined = productData?.detail?.images?.[activeImageIndex];

    const carouselRef = useRef<HTMLDivElement>(null);

    const handleScrollUp = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                top: -100, // Ajusta la cantidad de desplazamiento hacia arriba
                behavior: "smooth",
            });
        }
    };

    const handleScrollDown = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                top: 100, // Ajusta la cantidad de desplazamiento hacia abajo
                behavior: "smooth",
            });
        }
    };

    return (
        <div className={styles["container-section-gallery"]}>
            <DetailsPrimaryImgComponent activeImage={activeImage} />
            <div className={styles["container-section-carousel"]} ref={carouselRef}>
                <div className={styles["carousel"]}>
                    {
                        productData && Object.keys(productData).length > 0 &&
                        productData?.detail?.images?.map((image, index) => {
                            return (
                                <DetailsCarouselImgComponent
                                    key={image.imgSlug}
                                    imgSrc={image.imgSrc}
                                    imgAlt={image.imgAlt}
                                    imgProportionsX={image.imgProportionsX ? image.imgProportionsX : 1}
                                    handleImageClick={() => handleImageClick(index)}
                                />
                            )
                        })
                    }
                </div>
                <div className={styles["carousel-buttons"]}>
                    <button className={`${styles["carousel-arrow"]} ${styles["top"]}`} onClick={handleScrollUp}>
                        a
                    </button>
                    <button className={`${styles["carousel-arrow"]} ${styles["bottom"]}`} onClick={handleScrollDown}>
                        a
                    </button>
                </div>
            </div>
        </div>
    )
}

