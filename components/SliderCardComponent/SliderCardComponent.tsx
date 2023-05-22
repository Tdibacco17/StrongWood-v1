import Image from "next/image";
import styles from "./SliderCardComponent.module.scss";
import useImageLoader from "@/utils/img/useImageLoader";

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

    const loading = useImageLoader(imgSrc);

    return (
        <div className={styles["container-outer-image"]} >
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
            <div className={styles["container-overlay-image"]} />
        </div>
    );
}