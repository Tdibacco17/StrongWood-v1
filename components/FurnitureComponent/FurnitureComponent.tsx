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
}: {
    furnitureData: FurnitureTableInterface[];
    visibleTables: number[];
    clickedImages: { [key: number]: FurnitureDataCardsInterface[] };
    showMissingFields: boolean;
    validated: boolean;
    handleCardClick: (tableId: number, cardId: number, cardTitle: string, tableTitle: string) => void;
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
                            furnitureData={furnitureData}
                        />
                    )
                })}
            </div>
            {visibleTables.length > furnitureData.length &&
                <button className={`${styles["button-consultation-price"]}`}
                    onClick={handleValidation}>COTIZAR</button>}
            {/* {visibleTables.length > furnitureData.length && textAlert ? <p>Seleccionar todas las opciones</p> : <></>} */}
        </div>
    )
}