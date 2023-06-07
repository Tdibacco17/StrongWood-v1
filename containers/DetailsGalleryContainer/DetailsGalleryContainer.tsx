import DetailsGalleryComponent from "@/components/DetailsGalleryComponent/DetailsGalleryComponent";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ImgDataInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import { useWindowSize } from "@/utils/size/useWindowSIze";
import { useContext, useRef, useState } from "react";

export default function DetailsGalleryContainer() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    const handleImageClick = (index: number) => {
        setActiveImageIndex(index);
    };

    const activeImage: ImgDataInterface | undefined = productData?.detail?.images?.[activeImageIndex];

    const carouselRef = useRef<HTMLDivElement>(null);

    const { width } = useWindowSize()

    const handleScrollUp = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                top: -165, // Ajusta la cantidad de desplazamiento hacia arriba
                behavior: "smooth",
            });
        }
    };

    const handleScrollDown = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                top: 165, // Ajusta la cantidad de desplazamiento hacia abajo
                behavior: "smooth",
            });
        }
    };

    const handleScrollLeft = () => {
        if (width < 768 && carouselRef.current) {
            carouselRef.current.scrollBy({
                top: -165, // Ajusta la cantidad de desplazamiento hacia arriba para formato desktop
                left: -165, // Ajusta la cantidad de desplazamiento hacia la izquierda para formato mobile
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        if (width < 768 && carouselRef.current) {
            carouselRef.current.scrollBy({
                top: 165, // Ajusta la cantidad de desplazamiento hacia abajo para formato desktop
                left: 165, // Ajusta la cantidad de desplazamiento hacia la derecha para formato mobile
                behavior: 'smooth',
            });
        }
    };


    return <DetailsGalleryComponent
        width={width}
        handleScrollUp={handleScrollUp}
        handleScrollDown={handleScrollDown}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
        activeImage={activeImage}
        carouselRef={carouselRef}
        handleImageClick={handleImageClick}
    />
}