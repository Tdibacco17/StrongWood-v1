import styles from "./FurnitureTableComponent.module.scss";
import React from "react";
import { FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/Interfaces";
import FurnitureCardContainer from "@/containers/FurnitureCardContainer/FurnitureCardContainer";
import useHorizontalScroll from "@/utils/scroll/useHorizontalScroll";

export default function FurnitureTableComponent({
    TABLEelement,
    isTableVisible,
    shouldApplyStyle,
    handleCardClick,
    clickedImages,
    visibleTables,
    furnitureData,
    validated
}: {
    TABLEelement: FurnitureTableInterface,
    isTableVisible: boolean,
    shouldApplyStyle: boolean,
    handleCardClick: (tableId: number, cardId: number, cardTitle: string, tableTitle: string) => void;
    clickedImages: { [key: number]: FurnitureDataCardsInterface[] };
    visibleTables: number[],
    furnitureData: FurnitureTableInterface[];
    validated: boolean
}) {

    const scrollRef = useHorizontalScroll();
    return (
        <div id={`${TABLEelement.tableId}`} className={` ${styles["container-all-table-design"]} ${isTableVisible ? "" : styles["hidden"]}`}>
            <div className={styles["container-table"]}>
                <div className={styles["container-header-table"]}>
                    <p className={styles["container-title-table"]}>{TABLEelement.tableTitle}</p>
                    <p className={`${styles["container-subtitle-table"]} 
                    ${(visibleTables.length > furnitureData.length && shouldApplyStyle) ?
                            (validated ? "" : styles["redTableColor"]) : null}`}>
                        Mínimo elegir 1 opción{TABLEelement.maxSelections !== 1 ? `, máximo ${TABLEelement.maxSelections}` : ""}
                    </p>
                </div>
                <div className={`${styles["carousel-table"]}`} ref={scrollRef}>
                    {
                        TABLEelement.cards.map((CARDelement: FurnitureDataCardsInterface) => {
                            return (
                                <FurnitureCardContainer
                                    key={CARDelement.cardId}
                                    handleCardClick={handleCardClick}
                                    CARDelement={CARDelement}
                                    TABLEelement={TABLEelement}
                                    clickedImages={clickedImages}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}