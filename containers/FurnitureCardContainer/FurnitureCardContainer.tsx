import FurnitureCardComponent from "@/components/FurnitureCardComponent/FurnitureCardComponent";
import { FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/Interfaces";

export default function FurnitureCardContainer({
    CARDelement,
    handleCardClick,
    TABLEelement,
    clickedImages
}: {
    CARDelement: FurnitureDataCardsInterface,
    handleCardClick: (tableId: number, cardId: number, cardTitle: string) => void;
    TABLEelement: FurnitureTableInterface,
    clickedImages: { [key: number]: FurnitureDataCardsInterface[] };
}) {

    const isCardSelected = (clickedImages[TABLEelement.tableId] || []).some(image => image.cardId === CARDelement.cardId);

    return <FurnitureCardComponent
        handleCardClick={handleCardClick}
        CARDelement={CARDelement}
        TABLEelement={TABLEelement}
        isCardSelected={isCardSelected}
    />
}