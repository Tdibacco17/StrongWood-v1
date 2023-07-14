import Image from "next/image"
import styles from "./DesignsCardCategorieComponent.module.scss"
import { useState } from "react";
import { DesignInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";

export default function DesignsCardCategorieComponent({
    designCategorie
}: {
    designCategorie: DesignInterface
}) {
    const router = useRouter()

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className={styles["container-outer-image"]}
            data-id={`${designCategorie.designSlug}`}
            onClick={() => { router.push(`/design/${designCategorie.designSlug}`) }}>
            {
                !imageLoaded && (
                    <div className={styles["container-inner-placeholder"]}>
                        Cargando...
                    </div>
                )
            }
            <div className={imageLoaded ? styles["container-inner-image"] : ""}>
                <Image
                    src={`${designCategorie.image.imgSrc}`}
                    alt={`${designCategorie.image.imgAlt}`}
                    fill
                    loading="eager"
                    onLoadingComplete={() => { setImageLoaded(true) }}
                    style={{ opacity: imageLoaded ? "1" : "0" }}
                    sizes="(max-width: 768px) 100vw, var(--design-card-image-proportion)"
                />
            </div>
            {imageLoaded && <div className={styles["container-overlay-image"]}>
                <p className={styles["title-overlay"]}>{designCategorie.title}</p>
            </div>}
        </div>
    )
}