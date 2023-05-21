import Image from "next/image"
import styles from "./DetailsPrimaryImgComponent.module.scss"
import { ImgDataInterface } from "@/types/Interfaces";
import useImageLoading from "@/utils/img/useImageLoading";


export default function DetailsPrimaryImgComponent({
    activeImage,
}: {
    activeImage: ImgDataInterface | undefined;
}) {

    const imageUrl = activeImage?.imgSrc;
    const loading = imageUrl ? useImageLoading(imageUrl) : false;

    return (
        <div className={styles["container-outer-image"]}>
            {loading && (
                <div className={styles["container-inner-placeholder"]}>
                    Cargando...
                </div>
            )}
            {!loading && activeImage && (
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={activeImage?.imgSrc || "/image"}
                        alt={activeImage?.imgAlt || "image"}
                        fill
                        priority
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>)}
            <style jsx>{`
            .${styles["container-outer-image"]} {
                --card-details-image-proportion: calc((var(--card-details-image-width)) * ${activeImage?.imgProportionsX || 1});
            }
        `}</style>
        </div>
    );
}