import { useContext, useRef, useState } from "react";
import DetailsPrimaryImgComponent from "../DetailsPrimaryImgComponent/DetailsPrimaryImgComponent"
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ImgDataInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import styles from "./DetailsGalleryComponent.module.scss"
import DetailsCarouselImgComponent from "../DetailsCarouselImgComponent/DetailsCarouselImgComponent";
import CarouselButtonsContainer from "@/containers/DetailsCarouselButtonsContainer/DetailsCarouselButtonsComponent";

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

    return (
        <div className={styles['container-section-gallery']}>
            <DetailsPrimaryImgComponent activeImage={activeImage} />
            <div className={styles['container-section-carousel']}>
                <div className={styles['carousel']} ref={carouselRef}>
                    {productData &&
                        Object.keys(productData).length > 0 &&
                        productData?.detail?.images?.map((image, index) => {
                            return (
                                <DetailsCarouselImgComponent
                                    key={image.imgSlug}
                                    imgSrc={image.imgSrc}
                                    imgAlt={image.imgAlt}
                                    imgProportionsX={image.imgProportionsX ? image.imgProportionsX : 1}
                                    handleImageClick={() => handleImageClick(index)}
                                />
                            );
                        })}
                </div>
                <CarouselButtonsContainer carouselRef={carouselRef} />
            </div>
        </div>
    );
}