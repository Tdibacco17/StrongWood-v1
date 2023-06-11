import Image from "next/image"
import styles from "./DesignCardCategoriesComponent.module.scss"
import { useState } from "react";

export default function DesignCardCategoriesComponent({
    imgSrc,
    imgAlt,
    title,
    imgProportionsX
}: {
    imgSrc: string,
    imgAlt: string,
    title: string,
    imgProportionsX?: number,
}) {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={styles["container-section-card-design"]}>

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
            </div>
            <div className={styles["container-overlay-image"]}>
                <h2 className={styles["title-overlay"]}>{title}</h2>
            </div>
            {/* <style jsx>{`
                .${styles["container-outer-image"]} {
                    --card-image-proportion: calc((var(--card-image-inner-height)) * ${imgProportionsX});
                }
            `}</style> */}
        </div>
    )
}