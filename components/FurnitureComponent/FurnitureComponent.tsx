import FurnitureTableContainer from "@/containers/FurnitureTableContainer/FurnitureTableContainer"
import styles from "./FurnitureComponent.module.scss"
import { FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/Interfaces";

export default function FurnitureComponent({
    furnitureData,
    visibleTables,
    clickedImages,
    showMissingFields,
    validated,
    handleCardClick,
    handleValidation
}: {
    furnitureData: FurnitureTableInterface[];
    visibleTables: number[];
    clickedImages: { [key: number]: FurnitureDataCardsInterface[] };
    showMissingFields: boolean;
    validated: boolean;
    handleCardClick: (tableId: number, cardId: number, cardTitle: string) => void;
    handleValidation: () => void;
}) {

    return (
        <div className={styles["container-section-furniture"]}>
            <div className={styles["container-tables"]}>
                {furnitureData.map((TABLEelement: FurnitureTableInterface) => {
                    return (
                        <FurnitureTableContainer
                            key={TABLEelement.tableId}
                            TABLEelement={TABLEelement}
                            clickedImages={clickedImages}
                            visibleTables={visibleTables}
                            showMissingFields={showMissingFields}
                            validated={validated}
                            handleCardClick={handleCardClick}
                        />
                    )
                })}
                {visibleTables.length > furnitureData.length && <button onClick={handleValidation}>COTIZAR</button>}
                {visibleTables.length > furnitureData.length ? (validated ? "TODO ok" : "falta completar campos") : null}
            </div>
        </div>
    )
}