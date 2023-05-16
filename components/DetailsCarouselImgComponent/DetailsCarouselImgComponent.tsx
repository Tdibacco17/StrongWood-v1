import { useEffect, useState } from "react";
import styles from "./DetailsCarouselImgComponent.module.scss"
import Image from "next/image";

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

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);

        const image = new window.Image();
        image.src = imgSrc;
        image.onload = () => {
            setLoading(false);
        };

        return () => {
            // Cancelar la carga de la imagen si el componente se desmonta antes de que se complete
            image.onload = null;
        };
    }, [imgSrc]);

    return (
        <div className={styles["container-outer-image"]} onClick={handleImageClick}>
            {loading && (
                <div className={styles["container-inner-placeholder"]}>
                    Cargando...
                </div>
            )}
            {!loading && imgSrc && (
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        priority
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}
            <style jsx>{`
                .${styles["container-outer-image"]} {
                   --card-carrousel-image-proportion: calc((var(--card-carrousel-image-width)) * ${imgProportionsX});
                }
            `}</style>
        </div>
    )
}