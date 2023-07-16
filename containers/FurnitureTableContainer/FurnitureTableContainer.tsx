import FurnitureTableComponent from "@/components/FurnitureTableComponent/FurnitureTableComponent";
import { FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/Interfaces";

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

    return <FurnitureTableComponent
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