import styles from "./DetailsCarouselImgComponent.module.scss"
import Image from "next/image";
import useImageLoader from "@/utils/img/useImageLoader";

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

    const loading = useImageLoader(imgSrc)

    return (
        <div className={styles["container-outer-image"]} onClick={handleImageClick}>
            {loading && (
                <div className={styles["container-inner-placeholder"]}>
                    Cargando...
                </div>
            )}
            {!loading && (
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        priority
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