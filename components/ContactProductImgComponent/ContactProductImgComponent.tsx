import { useState } from "react";
import styles from "./ContactProductImgComponent.module.scss"
import Image from "next/image";

export default function ContactProductImgComponent({ imgSrc, imgAlt }: { imgSrc: string, imgAlt: string }) {

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
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    priority
                    onLoadingComplete={() => { setImageLoaded(true) }}
                    style={{ opacity: imageLoaded ? "1" : "0" }}
                    sizes="(max-width: 480px) 5rem, (max-width: 768px) 7rem, (max-width: 992px) 30em, (max-width: 1150px) 24rem, 26rem"
                />
            </div>
        </div>
    )
}