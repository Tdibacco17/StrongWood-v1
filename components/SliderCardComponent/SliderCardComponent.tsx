import Image from "next/image";
import styles from "./SliderCardComponent.module.scss";

export default function SliderCardComponent({
    imgSrc,
    imgAlt,
    imgProportionsX,
    imgProportionsY
}: {
    imgSrc: string;
    imgAlt: string;
    imgProportionsX?: number;
    imgProportionsY?: number;
}) {

    return (
        <div className={styles["container-outer-image"]} >

            {imgSrc ? (
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        priority
                    />
                </div>
            ) : (
                <div className={styles["container-inner-placeholder"]}>
                    Cargando...
                </div>
            )}
            <div className={styles["container-overlay-image"]} />
        </div>
    );
}