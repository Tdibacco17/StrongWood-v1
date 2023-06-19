import styles from "./ProductDetailCarouselImgComponent.module.scss"
import Image from "next/image";
import { useState } from "react";

export default function ProductDetailCarouselImgComponent({
    imgSrc,
    imgAlt,
    handleImageClick
}: {
    imgSrc: string,
    imgAlt: string,
    handleImageClick: () => void;
}) {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={styles["container-outer-image"]} onClick={handleImageClick}>
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
                    loading="lazy"
                    onLoadingComplete={() => { setImageLoaded(true) }}
                    style={{ opacity: imageLoaded ? "1" : "0" }}
                />
            </div>
        </div>
    )
}