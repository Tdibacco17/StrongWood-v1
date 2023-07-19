import FurnitureTableComponent from "@/components/FurnitureTableComponent/FurnitureTableComponent";
import { FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/Interfaces";
import { useRef } from "react";

export default function FurnitureTableContainer({
    TABLEelement,
    visibleTables,
    clickedImages,
    showMissingFields,
    validated,
    handleCardClick,
    furnitureData
}: {
    TABLEelement: FurnitureTableInterface,
    visibleTables: number[];
    clickedImages: { [key: number]: FurnitureDataCardsInterface[] };
    showMissingFields: boolean;
    validated: boolean,
    handleCardClick: (tableId: number, cardId: number, cardTitle: string, tableTitle: string) => void;
    furnitureData: FurnitureTableInterface[];
}) {
    const isTableVisible = visibleTables.includes(TABLEelement.tableId);
    const isTableMissingFields = !clickedImages[TABLEelement.tableId] || clickedImages[TABLEelement.tableId].length === 0;
    const shouldApplyStyle = showMissingFields && isTableVisible && isTableMissingFields && !validated;

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

    return <FurnitureTableComponent
        TABLEelement={TABLEelement}
        isTableVisible={isTableVisible}
        shouldApplyStyle={shouldApplyStyle}
        handleCardClick={handleCardClick}
        clickedImages={clickedImages}
        visibleTables={visibleTables}
        furnitureData={furnitureData}
        validated={validated}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
        carouselRef={carouselRef}
    />
}