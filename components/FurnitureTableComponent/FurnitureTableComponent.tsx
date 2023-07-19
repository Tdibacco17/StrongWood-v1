import styles from "./FurnitureTableComponent.module.scss";
import React from "react";
import { FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/Interfaces";
import FurnitureCardContainer from "@/containers/FurnitureCardContainer/FurnitureCardContainer";
import Image from "next/image";

export default function FurnitureTableComponent({
    TABLEelement,
    isTableVisible,
    shouldApplyStyle,
    handleCardClick,
    clickedImages,
    visibleTables,
    furnitureData,
    validated,
    handleScrollLeft,
    handleScrollRight,
    carouselRef
}: {
    TABLEelement: FurnitureTableInterface,
    isTableVisible: boolean,
    shouldApplyStyle: boolean,
    handleCardClick: (tableId: number, cardId: number, cardTitle: string, tableTitle: string) => void;
    clickedImages: { [key: number]: FurnitureDataCardsInterface[] };
    visibleTables: number[],
    furnitureData: FurnitureTableInterface[];
    validated: boolean,
    handleScrollLeft: () => void;
    handleScrollRight: () => void;
    carouselRef: React.RefObject<HTMLDivElement>;
}) {

    return (
        <div id={`${TABLEelement.tableId}`} className={` ${styles["container-all-table-design"]} ${isTableVisible ? "" : styles["hidden"]}`}>
            <div className={styles["container-table"]}>
                <div className={styles["container-header-table"]}>
                    <p className={styles["container-title-table"]}>{TABLEelement.tableTitle}</p>
                    <p className={`${styles["container-subtitle-table"]} 
                    ${(visibleTables.length > furnitureData.length && shouldApplyStyle) ?
                            (validated ? "" : styles["error-text-msg"]) : null}`}>
                        Mínimo elegir 1 opción{TABLEelement.maxSelections !== 1 ? `, máximo ${TABLEelement.maxSelections}` : ""}
                    </p>
                </div>
                <div className={`${styles["carousel-table"]}`} ref={carouselRef}>
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
                <div className={styles['buttons-table']}>
                    <button
                        className={styles['buttons']}
                        onClick={handleScrollLeft}>
                        <Image
                            src="/assets/icons/arrowLeft.svg"
                            alt="Icono Izquierda"
                            width={15}
                            height={15}
                            loading="lazy"
                        />
                    </button>
                    <button
                        className={styles['buttons']}
                        onClick={handleScrollRight}>
                        <Image
                            src="/assets/icons/arrowRight.svg"
                            alt="Icono Derecha"
                            width={15}
                            height={15}
                            loading="lazy"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}