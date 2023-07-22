import DesignDetailCarouselComponent from "@/components/DesignDetailCarouselComponent/DesignDetailCarouselComponent";
import { ImgDataInterface } from "@/types/Interfaces";
import { useRef } from "react";

export default function DesignDetailCarouselContainer({
    imagesData,
    titleCategorie
}: {
    imagesData: ImgDataInterface[];
    titleCategorie: string
}) {

    const carouselRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -475, // Ajusta la cantidad de desplazamiento hacia la izquierda para formato mobile
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 475, // Ajusta la cantidad de desplazamiento hacia la derecha para formato mobile
                behavior: 'smooth',
            });
        }
    };

    return <DesignDetailCarouselComponent
        imagesData={imagesData}
        carouselRef={carouselRef}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
        titleCategorie={titleCategorie}
    />
}