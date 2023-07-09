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
    handleCardClick: (tableId: number, cardId: number, cardTitle: string, tableTitle:string) => void;
    furnitureData: FurnitureTableInterface[];
}) {
    const isTableVisible = visibleTables.includes(TABLEelement.tableId);
    const isTableMissingFields = !clickedImages[TABLEelement.tableId] || clickedImages[TABLEelement.tableId].length === 0;
    const shouldApplyStyle = showMissingFields && isTableVisible && isTableMissingFields && !validated;

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
        TABLEelement={TABLEelement}
        isTableVisible={isTableVisible}
        shouldApplyStyle={shouldApplyStyle}
        handleCardClick={handleCardClick}
        clickedImages={clickedImages}
        visibleTables={visibleTables}
        furnitureData={furnitureData}
        validated={validated}
    />
}