import Image from "next/image";
import styles from "./FurnitureTableComponent.module.scss";
import FurnitureCardComponent from "../FurnitureCardComponent/FurnitureCardComponent";
import React from "react";
import { FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/Interfaces";
import FurnitureCardContainer from "@/containers/FurnitureCardContainer/FurnitureCardContainer";

export default function FurnitureTableComponent({
    carouselTableRef,
    handleScrollLeft,
    handleScrollRight,
    TABLEelement,
    isTableVisible,
    shouldApplyStyle,
    handleCardClick,
    clickedImages

}: {
    carouselTableRef: React.RefObject<HTMLDivElement>,
    handleScrollLeft: () => void;
    handleScrollRight: () => void;
    TABLEelement: FurnitureTableInterface,
    isTableVisible: boolean,
    shouldApplyStyle: boolean,
    handleCardClick: (tableId: number, cardId: number, cardTitle: string) => void;
    clickedImages: { [key: number]: FurnitureDataCardsInterface[] };
}) {

    return (
        <div id={`${TABLEelement.tableId}`} className={` ${styles["container-all-table-design"]} 
        ${styles["table-content"]} ${isTableVisible ? "" : styles["hidden"]} 
        ${shouldApplyStyle ? styles["redTable"] : ""}`}>
            <div className={styles["carousel-table"]} ref={carouselTableRef}>
                <p>{TABLEelement.tableTitle}</p>
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
            <div className={styles["buttons-table"]}>
                <button className={styles["buttons"]} onClick={handleScrollLeft}>
                    <Image
                        src="/assets/icons/arrowLeft.svg"
                        alt="Icono Izquierda"
                        width={15}
                        height={15}
                        loading="lazy"
                    />
                </button>
                <button className={styles["buttons"]} onClick={handleScrollRight}>
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
    )
}