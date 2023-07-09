import { FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/Interfaces";
import styles from "./FurnitureCardComponent.module.scss"

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

    return (
        <div className={`${styles["container-outer-image"]} ${isCardSelected ? styles["selected"] : ""}`}
            onClick={() => handleCardClick(TABLEelement.tableId, CARDelement.cardId, CARDelement.cardTitle, TABLEelement.tableTitle)}
            data-id={`${CARDelement.cardId}`}>
            {/* {
                !imageLoaded && (
                    <div className={styles["container-inner-placeholder"]}>
                        Cargando...
                    </div>
                )
            } */}
            {/* <div className={imageLoaded ? styles["container-inner-image"] : ""}>
                <Image
                    src={`${imgData.imgSrc}`}
                    alt={`${imgData.imgAlt}`}
                    fill
                    loading="lazy"
                    onLoadingComplete={() => { setImageLoaded(true) }}
                    style={{ opacity: imageLoaded ? "1" : "0" }}
                />
            </div> */}
            <div className={styles["container-overlay-image"]}>
                <h2 className={styles["title-overlay"]}> {CARDelement.cardTitle}</h2>
            </div>
            {/* <style jsx>{`
            .${styles["container-outer-image"]} {
                --design-card-image-proportion: calc((var(--design-card-inner-height)) * ${imgData.imgProportionsX});
            }
        `}</style> */}
        </div>
    )
}