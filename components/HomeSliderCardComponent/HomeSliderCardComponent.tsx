import Image from "next/image";
import styles from "./HomeSliderCardComponent.module.scss";
import { useState } from "react";

export default function HomeSliderCardComponent({
    imgSrc,
    imgAlt,
    imageLoaded,
    setImageLoaded
}: {
    imgSrc: string;
    imgAlt: string;
    imageLoaded: boolean;
    setImageLoaded: (value: boolean) => void
}) {

    return (
        <div className={styles["container-outer-image"]} >
            {
                !imageLoaded && (
                    <div className={styles["container-inner-placeholder"]}>
                        Cargando...
                    </div>
                )
            }
            <div className={imageLoaded ? styles["container-inner-image"] : ""}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    priority
                    onLoadingComplete={() => { setImageLoaded(true) }}
                    style={{ opacity: imageLoaded ? "1" : "0" }}
                    // sizes="(max-width: 1300px) 100vw, var(--banner-image-outer-width)"
                />
            </div>
            {/* <div className={styles["container-overlay-image"]} /> */}
        </div>
    );
}