import { FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/Interfaces";
import styles from "./FurnitureCardComponent.module.scss"

export default function FurnitureCardComponent({
    CARDelement,
    handleCardClick,
    TABLEelement,
    clickedImages,
    isCardSelected
}: {
    CARDelement: FurnitureDataCardsInterface,
    handleCardClick: (tableId: number, cardId: number, cardTitle: string) => void;
    TABLEelement: FurnitureTableInterface,
    clickedImages: { [key: number]: FurnitureDataCardsInterface[] };
    isCardSelected: boolean
}) {

    return (
        <div className={`${styles["container-outer-image"]} ${styles["card-content"]} ${isCardSelected ? styles.selected : ""}`}
            onClick={() => handleCardClick(TABLEelement.tableId, CARDelement.cardId, CARDelement.cardTitle)}
            data-id={`${CARDelement.cardId}`}>
            {CARDelement.cardTitle}

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
            {/* <style jsx>{`
            .${styles["container-outer-image"]} {
                --design-card-image-proportion: calc((var(--design-card-inner-height)) * ${imgData.imgProportionsX});
            }
        `}</style> */}
        </div>
    )
}