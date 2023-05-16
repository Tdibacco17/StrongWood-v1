import { useState } from "react";
import styles from "./DetailsCarrouselImgComponent.module.scss"
import Image from "next/image";

export default function DetailsCarrouselImgComponent({
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

    const [loading, setLoading] = useState<boolean>(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <div className={styles["container-outer-image"]} onClick={handleImageClick}>
            {
                loading && <div className={styles["container-inner-placeholder"]} >
                    Cargando..
                </div>
            }
            {
                imgSrc && <div className={styles["container-inner-image"]}>
                    <Image
                        src={`${imgSrc}`}
                        alt={`${imgAlt}`}
                        fill
                        priority
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoad={handleImageLoad}
                    />
                </div>
            }
            <style jsx>{`
                .${styles["container-outer-image"]} {
                   --card-carrousel-image-proportion: calc((var(--card-carrousel-image-width)) * ${imgProportionsX});
                }
            `}</style>
        </div>
    )
}