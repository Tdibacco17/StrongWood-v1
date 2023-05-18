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
        console.log("Clicked index:", index);
        setActiveImageIndex(index);
        console.log("Active image index:", activeImageIndex);

        console.log("handleImageClick: ", index);
        console.log("carouselRef.current: ", carouselRef.current);
    };

    const activeImage: ImgDataInterface | undefined = productData?.detail?.images?.[activeImageIndex];

    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging && carouselRef.current) {
            const x = e.pageX - (carouselRef.current.offsetLeft || 0);
            const walk = (x - startX) * 1.5; // Ajusta la velocidad del desplazamiento

            carouselRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className={styles["container-section-gallery"]}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            <DetailsPrimaryImgComponent activeImage={activeImage} />
            <div className={styles["container-section-carousel"]} ref={carouselRef}>
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
        </div>
    )
}