import { FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/Interfaces";
import styles from "./FurnitureCardComponent.module.scss"
import { useState } from "react";
import Image from "next/image";

export default function FurnitureCardComponent({
    CARDelement,
    handleCardClick,
    TABLEelement,
    isCardSelected
}: {
    CARDelement: FurnitureDataCardsInterface,
    handleCardClick: (tableId: number, cardId: number, cardTitle: string, tableTitle: string) => void;
    TABLEelement: FurnitureTableInterface,
    isCardSelected: boolean
}) {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={`${styles["container-outer-image"]} ${isCardSelected ? styles["selected"] : ""}`}
            onClick={() => handleCardClick(TABLEelement.tableId, CARDelement.cardId, CARDelement.cardTitle, TABLEelement.tableTitle)}
            data-id={`${CARDelement.cardId}`}>
            {
                !imageLoaded && (
                    <div className={styles["container-inner-placeholder"]}>
                        Cargando...
                    </div>
                )
            }
            <div className={imageLoaded ? styles["container-inner-image"] : ""}>
                <Image
                    src={`${CARDelement.image?.imgSrc ? CARDelement.image?.imgSrc : "/assets/logo/strongWoodLogo.webp"}`}
                    alt={`${CARDelement.image?.imgAlt ? CARDelement.image?.imgAlt : "altImage"}`}
                    fill
                    loading="lazy"
                    onLoadingComplete={() => { setImageLoaded(true) }}
                    style={{ opacity: imageLoaded ? "1" : "0" }}
                    sizes="(max-width: 768px) 100vw, var(--design-card-image-proportion)"
                />
            </div>
            <div className={styles["container-overlay-image"]}>
                <p className={styles["title-overlay"]}> {CARDelement.cardTitle}</p>
            </div>
        </div>
    )
}