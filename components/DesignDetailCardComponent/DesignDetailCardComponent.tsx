import { ImgDataInterface } from "@/types/Interfaces"
import styles from "./DesignDetailCardComponent.module.scss"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DesignDetailCardComponent({ imgData }: { imgData: ImgDataInterface }) {

    const [imageLoaded, setImageLoaded] = useState(false);

    const router = useRouter()

    return (
        <div className={styles["container-outer-image"]}
            data-id={`${imgData.imgSlug}`}
            onClick={() => {
                router.push({
                    pathname:`/furniture/${router.query.slug}`,
                    query: { item: `${imgData.imgSlug}` }
                })
            }}>
            {
                !imageLoaded && (
                    <div className={styles["container-inner-placeholder"]}>
                        Cargando...
                    </div>
                )
            }
            <div className={imageLoaded ? styles["container-inner-image"] : ""}>
                <Image
                    src={`${imgData.imgSrc}`}
                    alt={`${imgData.imgAlt}`}
                    fill
                    loading="lazy"
                    onLoadingComplete={() => { setImageLoaded(true) }}
                    style={{ opacity: imageLoaded ? "1" : "0" }}
                    sizes="(max-width: 768px) 100vw, var(--design-card-image-proportion)"
                />
            </div>
            <div className={styles["container-overlay-image"]}>
                <p className={styles["title-overlay"]}>{imgData.imgAlt}</p>
            </div>
        </div>
    )
}