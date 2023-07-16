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
    handleValidation,
    buttonClicked
}: {
    furnitureData: FurnitureTableInterface[];
    visibleTables: number[];
    clickedImages: { [key: number]: FurnitureDataCardsInterface[] };
    showMissingFields: boolean;
    validated: boolean;
    handleCardClick: (tableId: number, cardId: number, cardTitle: string, tableTitle: string) => void;
    handleValidation: () => void;
    buttonClicked: boolean
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
                            furnitureData={furnitureData}
                        />
                    )
                })}
            </div>
            <div className={styles["container-button-finish"]}>
                {
                    (visibleTables.length > furnitureData.length && buttonClicked && (validated === false)) &&
                    <p className={styles["error-text-msg"]}>Seleccione todas las opciones.</p>
                }
                {visibleTables.length > furnitureData.length &&
                    <button className={`${styles["button-consultation-price"]}`}
                        onClick={handleValidation}>COTIZAR</button>
                }
            </div>
        </div>
    )
}