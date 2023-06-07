import Image from "next/image";
import styles from "./HomeSliderCardComponent.module.scss";
import { useState } from "react";

export default function HomeSliderCardComponent({
    imgSrc,
    imgAlt,
}: {
    imgSrc: string;
    imgAlt: string;
}) {

    const [imageLoaded, setImageLoaded] = useState(false);

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
                />
            </div>
            {/* <div className={styles["container-overlay-image"]} /> */}
        </div>
    );
}