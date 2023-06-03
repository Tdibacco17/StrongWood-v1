import Image from "next/image";
import styles from "./HomeCategorieCardComponent.module.scss"
import { useEffect, useState } from "react";

export default function CardComponent({
    imgSrc,
    imgAlt,
    imgProportionsX,
    imgProportionsY,
    title,
    subtitle
}: {
    imgSrc: string,
    imgAlt: string,
    imgProportionsX?: number,
    imgProportionsY?: number,
    title?: string,
    subtitle?: string,
}) {

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
    }, [imageLoaded]);

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
                <h2 className={styles["title-overlay"]}>{`${title ? title : ""}`}</h2>
                <h3 className={styles["subtitle-overlay"]}>{`${subtitle ? subtitle : ""}`}</h3>
            </div>
            <style jsx>{`
                .${styles["container-outer-image"]} {
                    --card-image-proportion: calc((var(--card-image-inner-height)) * ${imgProportionsX});
                }
            `}</style>
        </div>
    )
}