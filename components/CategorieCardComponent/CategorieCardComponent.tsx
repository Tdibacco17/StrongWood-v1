import Image from "next/image";
import styles from "./CategorieCardComponent.module.scss"
import useImageLoader from "@/utils/img/useImageLoader";

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

    const loading = useImageLoader(imgSrc);

    return (
        <div className={styles["container-outer-image"]}>
            {loading && (
                <div className={styles["container-inner-placeholder"]}>
                    Cargando...
                </div>
            )}
            {!loading && (
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={`${imgSrc}`}
                        alt={`${imgAlt}`}
                        fill
                        priority
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