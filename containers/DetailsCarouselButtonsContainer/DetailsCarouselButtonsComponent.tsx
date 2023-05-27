import CarouselButtonsComponent from "@/components/DetailsCarouselButtonsComponent/DetailsCarouselButtonsComponent";
import { useWindowSize } from "@/utils/size/useWindowSIze";

export default function CarouselButtonsContainer({ carouselRef }: { carouselRef: any }) {
    const { width } = useWindowSize()

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

    return <CarouselButtonsComponent
        width={width}
        handleScrollUp={handleScrollUp}
        handleScrollDown={handleScrollDown}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
    />
}