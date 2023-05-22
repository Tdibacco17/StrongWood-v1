import Image from "next/image"
import styles from "./DetailsPrimaryImgComponent.module.scss"
import { ImgDataInterface } from "@/types/Interfaces";

export default function DetailsPrimaryImgComponent({
    activeImage,
}: {
    activeImage: ImgDataInterface | undefined;
}) {

    return (
        <div className={styles["container-outer-image"]}>
            {activeImage ? (
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={activeImage?.imgSrc}
                        alt={activeImage?.imgAlt}
                        fill
                        priority
                    />
                </div>
            ) : (
                <div className={styles["container-inner-placeholder"]}>
                    Cargando...
                </div>
            )}
            <style jsx>{`
            .${styles["container-outer-image"]} {
                --card-details-image-proportion: calc((var(--card-details-image-width)) * ${activeImage?.imgProportionsX || 1});
            }
        `}</style>
        </div>
    );
}