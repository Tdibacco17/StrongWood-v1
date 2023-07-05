import styles from "./FurnitureCardComponent.module.scss"
import { useState } from "react";

export default function FurnitureCardComponent({
    tableId,
    nextTableId,
    handleSelectTable,
    imgData
}: {
    tableId: number,
    nextTableId: number;
    handleSelectTable: (id: string, imgData: any) => void,
    imgData: string
}) {
    /*{ imgData }: { imgData: ImgDataInterface }*/

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={styles["container-outer-image"]}
            onClick={() => handleSelectTable(nextTableId.toString(), imgData)}
            /* data-id={`${imgData.imgSlug}`}*/>
            {imgData}
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