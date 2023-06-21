import { ImgDataInterface } from "@/types/Interfaces"
import styles from "./DesignDetailCardComponent.module.scss"
import { useState } from "react";
import Image from "next/image";

export default function DesignDetailCardComponent({ imgData }: { imgData: ImgDataInterface }) {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={styles["container-outer-image"]}
            data-id={`${imgData.imgSlug}`}>
            {
                !imageLoaded && (
                    <div className={styles["container-inner-placeholder"]}>
                        Cargando...
                    </div>
                )
            }
            <div className={imageLoaded ? styles["container-inner-image"] : ""}>
                <Image
                    src={`${imgData.imgSrc}`}
                    alt={`${imgData.imgAlt}`}
                    fill
                    loading="lazy"
                    onLoadingComplete={() => { setImageLoaded(true) }}
                    style={{ opacity: imageLoaded ? "1" : "0" }}
                />
            </div>
            <div className={styles["container-overlay-image"]}>
                <h2 className={styles["title-overlay"]}>{imgData.imgAlt}</h2>
            </div>
            <style jsx>{`
            .${styles["container-outer-image"]} {
                --design-card-image-proportion: calc((var(--design-card-inner-height)) * ${imgData.imgProportionsX});
            }
        `}</style>
        </div>
    )
}