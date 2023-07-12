import Image from "next/image";
import styles from "./HomeCategorieCardComponent.module.scss"
import { useState } from "react";

export default function CardComponent({
    imgSrc,
    imgAlt,
    title,
    subtitle
}: {
    imgSrc: string,
    imgAlt: string,
    title?: string,
    subtitle?: string,
}) {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={styles["container-outer-image"]}>
            {
                !imageLoaded && (
                    <div className={styles["container-inner-placeholder"]}>
                        Cargando...
                    </div>
                )
            }
            <div className={imageLoaded ? styles["container-inner-image"] : ""}>
                <Image
                    src={`${imgSrc}`}
                    alt={`${imgAlt}`}
                    fill
                    loading="lazy"
                    onLoadingComplete={() => { setImageLoaded(true) }}
                    style={{ opacity: imageLoaded ? "1" : "0" }}
                />
            </div>
            <div className={styles["container-overlay-image"]}>
                <p className={styles["title-overlay"]}>{`${title ? title : ""}`}</p>
                <p className={styles["subtitle-overlay"]}>{`${subtitle ? subtitle : ""}`}</p>
            </div>
        </div>
    )
}