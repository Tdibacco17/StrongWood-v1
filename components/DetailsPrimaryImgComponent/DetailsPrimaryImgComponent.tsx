import Image from "next/image"
import styles from "./DetailsPrimaryImgComponent.module.scss"
import { useEffect, useState } from "react";
import { ImgDataInterface } from "@/types/Interfaces";


export default function DetailsPrimaryImgComponent({
    activeImage,
}: {
    activeImage: ImgDataInterface | undefined;
}) {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (activeImage?.imgSrc) {
            setLoading(true);
            const image = new window.Image();
            image.src = activeImage.imgSrc;
            image.onload = () => {
                setLoading(false);
            };

            return () => {
                image.onload = null;
            };
        }
    }, [activeImage]);

    return (
        <div className={styles["container-outer-image"]}>
            {loading && (
                <div className={styles["container-inner-placeholder"]}>
                    Cargando...
                </div>
            )}
            {!loading && activeImage && (<div className={styles["container-inner-image"]}>
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