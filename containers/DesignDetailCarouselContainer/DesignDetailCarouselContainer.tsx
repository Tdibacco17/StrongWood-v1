import DesignDetailCarouselComponent from "@/components/DesignDetailCarouselComponent/DesignDetailCarouselComponent";
import { ImgDataInterface } from "@/types/Interfaces";
import { useRef } from "react";

export default function DesignDetailCarouselContainer({ imagesData }: { imagesData: ImgDataInterface[] }) {
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            console.log("izquierda")
            carouselRef.current.scrollBy({
                left: -300, // Ajusta la cantidad de desplazamiento hacia la izquierda para formato mobile
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        if (carouselRef.current) {
            console.log("derecha")
            carouselRef.current.scrollBy({
                left: 300, // Ajusta la cantidad de desplazamiento hacia la derecha para formato mobile
                behavior: 'smooth',
            });
        }
    };


    return <DesignDetailCarouselComponent
        imagesData={imagesData}
        carouselRef={carouselRef}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
    />
}