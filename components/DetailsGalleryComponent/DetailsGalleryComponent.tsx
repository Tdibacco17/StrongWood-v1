import { useContext, useEffect, useRef, useState } from "react";
import DetailsPrimaryImgComponent from "../DetailsPrimaryImgComponent/DetailsPrimaryImgComponent"
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ImgDataInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import styles from "./DetailsGalleryComponent.module.scss"
import DetailsCarouselImgComponent from "../DetailsCarouselImgComponent/DetailsCarouselImgComponent";
import { useWindowSize } from "@/utils/size/useWindowSIze";

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

    const { width, height } = useWindowSize()

    const handleScrollUp = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                top: -150, // Ajusta la cantidad de desplazamiento hacia arriba
                behavior: "smooth",
            });
        }
    };

    const handleScrollDown = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                top: 150, // Ajusta la cantidad de desplazamiento hacia abajo
                behavior: "smooth",
            });
        }
    };

    const handleScrollLeft = () => {
        if (width < 768 && carouselRef.current) {
            carouselRef.current.scrollBy({
                top: -150, // Ajusta la cantidad de desplazamiento hacia arriba para formato desktop
                left: -150, // Ajusta la cantidad de desplazamiento hacia la izquierda para formato mobile
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        if (width < 768 && carouselRef.current) {
            carouselRef.current.scrollBy({
                top: 150, // Ajusta la cantidad de desplazamiento hacia abajo para formato desktop
                left: 150, // Ajusta la cantidad de desplazamiento hacia la derecha para formato mobile
                behavior: 'smooth',
            });
        }
    };

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
                <div className={styles['carousel-buttons']}>
                    <button
                        className={`${styles['carousel-arrow']} 
                        ${width < 768 ? styles['top'] : styles['left']}`}
                        onClick={width < 768 ? handleScrollLeft : handleScrollUp}>
                        a
                    </button>
                    <button
                        className={`${styles['carousel-arrow']} 
                        ${width < 768 ? styles['bottom'] : styles['right']}`}
                        onClick={width < 768 ? handleScrollRight : handleScrollDown}>
                        a
                    </button>
                </div>
            </div>
        </div>
    );
}