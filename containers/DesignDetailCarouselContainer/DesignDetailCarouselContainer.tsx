import DesignDetailCarouselComponent from "@/components/DesignDetailCarouselComponent/DesignDetailCarouselComponent";
import { ImgDataInterface } from "@/types/Interfaces";
import { useRef } from "react";

export default function DesignDetailCarouselContainer({ imagesData }: { imagesData: ImgDataInterface[]; }) {
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -350, // Ajusta la cantidad de desplazamiento hacia la izquierda para formato mobile
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 350, // Ajusta la cantidad de desplazamiento hacia la derecha para formato mobile
                behavior: 'smooth',
            });
        }
    };

    return <DesignDetailCarouselComponent
        imagesData={imagesData}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
        carouselRef={carouselRef}
    />
}