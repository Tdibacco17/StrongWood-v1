import FurnitureTableComponent from "@/components/FurnitureTableComponent/FurnitureTableComponent";
import { useRef } from "react";

export default function FurnitureTableContainer({
    tableId,
    handleSelectTable,
    data
}: {
    tableId: number,
    handleSelectTable: (id: string, imgData: any) => void,
    data: any
}) {

    const carouselTableRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (carouselTableRef.current) {
            carouselTableRef.current.scrollBy({
                left: -175, // Ajusta la cantidad de desplazamiento hacia la izquierda para formato mobile
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRight = () => {
        if (carouselTableRef.current) {
            carouselTableRef.current.scrollBy({
                left: 175, // Ajusta la cantidad de desplazamiento hacia la derecha para formato mobile
                behavior: 'smooth',
            });
        }
    };

    return <FurnitureTableComponent
        carouselTableRef={carouselTableRef}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
        tableId={tableId}
        handleSelectTable={handleSelectTable}
        data={data}
    />
}