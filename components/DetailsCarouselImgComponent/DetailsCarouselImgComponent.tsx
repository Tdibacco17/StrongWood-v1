import styles from "./DetailsCarouselImgComponent.module.scss"
import Image from "next/image";
import useImageLoading from "@/utils/img/useImageLoading";

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

    const imageUrl = imgSrc && imgSrc;
    const loading = useImageLoading(imageUrl);

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