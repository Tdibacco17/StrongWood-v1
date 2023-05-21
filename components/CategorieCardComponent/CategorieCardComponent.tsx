import Image from "next/image";
import styles from "./CategorieCardComponent.module.scss"
import useImageLoading from "@/utils/img/useImageLoading";

export default function CardComponent({
    imgSrc,
    imgAlt,
    imgProportionsX,
    imgProportionsY,
    title,
    subtitle
}: {
    imgSrc: string,
    imgAlt: string,
    imgProportionsX?: number,
    imgProportionsY?: number,
    title?: string,
    subtitle?: string,
}) {

    const imageUrl = imgSrc && imgSrc;
    const loading = imageUrl ? useImageLoading(imageUrl) : false;

    return (
        <div className={styles["container-outer-image"]}>
            {loading && (
                <div className={styles["container-inner-placeholder"]}>
                    Cargando...
                </div>
            )}
            {!loading && imgSrc && (
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={`${imgSrc}`}
                        alt={`${imgAlt}`}
                        fill
                        priority
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}

            <div className={styles["container-overlay-image"]}>
                <h2 className={styles["title-overlay"]}>{`${title ? title : ""}`}</h2>
                <h3 className={styles["subtitle-overlay"]}>{`${subtitle ? subtitle : ""}`}</h3>
            </div>
            <style jsx>{`
                .${styles["container-outer-image"]} {
                    --card-image-proportion: calc((var(--card-image-inner-height)) * ${imgProportionsX});
                }
            `}</style>
        </div>
    )
}