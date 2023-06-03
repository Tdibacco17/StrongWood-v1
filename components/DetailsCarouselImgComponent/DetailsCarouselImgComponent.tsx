import styles from "./DetailsCarouselImgComponent.module.scss"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DetailsCarouselImgComponent({
    imgSrc,
    imgAlt,
    imgProportionsX,
    handleImageClick
}: {
    imgSrc: string,
    imgAlt: string,
    imgProportionsX: number,
    handleImageClick: () => void;
}) {

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
    }, [imageLoaded]);

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