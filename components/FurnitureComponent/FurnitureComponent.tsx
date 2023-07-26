import FurnitureTableContainer from "@/containers/FurnitureTableContainer/FurnitureTableContainer"
import styles from "./FurnitureComponent.module.scss"
import { FurnitureDataCardsInterface, FurnitureTableInterface, ImgDataInterface, MeasureDataInterface, MeasureValues } from "@/types/Interfaces";
import FurnitureBannerComponent from "../FurnitureBannerComponent/FurnitureBannerComponent";
import { FurnitureMeasureComponent } from "../FurnitureMeasureComponent/FurnitureMeasureComponent";

export default function FurnitureComponent({
    furnitureData,
    visibleTables,
    clickedImages,
    showMissingFields,
    validated,
    handleCardClick,
    handleValidation,
    buttonClicked,
    imgData,
    measureData,
    imgSlugsWithAskMeasure,
    handleMeasureChange,
    measureValues
}: {
    furnitureData: FurnitureTableInterface[];
    visibleTables: number[];
    clickedImages: { [key: number]: FurnitureDataCardsInterface[] };
    showMissingFields: boolean;
    validated: boolean;
    handleCardClick: (tableId: number, cardId: number, cardTitle: string, tableTitle: string) => void;
    handleValidation: () => void;
    buttonClicked: boolean,
    imgData: ImgDataInterface | undefined,
    measureData: MeasureDataInterface,
    imgSlugsWithAskMeasure: string[],
    handleMeasureChange: (measureName: string, value: number) => void,
    measureValues: MeasureValues
}) {

    return (
        <div className={styles["container-section-furniture"]}>
            <FurnitureBannerComponent imgData={imgData} />
            <p className={styles["title-slogan"]}>SELECCIONÁ TU MUEBLE IDEAL</p>
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
            {/* {
                visibleTables.length > furnitureData.length && furnitureData.length !== 0 && */}
            <FurnitureMeasureComponent
                measureData={measureData}
                imgSlugsWithAskMeasure={imgSlugsWithAskMeasure}
                handleMeasureChange={handleMeasureChange}
                measureValues={measureValues}
            />
            {/* } */}
            <div className={styles["container-button-finish"]}>
                {
                    (visibleTables.length > furnitureData.length && buttonClicked && (validated === false)) &&
                    <p className={styles["error-text-msg"]}>Seleccione todas las opciones.</p>
                }
                {visibleTables.length > furnitureData.length && furnitureData.length !== 0 &&
                    <button className={`${styles["button-consultation-price"]}`}
                        onClick={handleValidation}>COTIZAR</button>
                }
            </div>
        </div>
    )
}