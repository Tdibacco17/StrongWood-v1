import Image from "next/image";
import styles from "./CardComponent.module.scss"
import { CustomStyles } from "@/types/Interfaces";

export default function CardComponent({
    imgSrc,
    imgAlt,
    originalWidth,
    originalHeight,
    outerHeight,
    outerWidth,
    size,
    title,
    subtitle
}: {
    imgSrc: string,
    imgAlt: string,
    originalWidth: number,
    originalHeight: number,
    outerHeight: number,
    outerWidth: number,
    size: number,
    title?: string,
    subtitle?: string,
}) {

    const newValues: CustomStyles = {
        "--original-width": `${originalWidth}`,
        "--original-height": `${originalHeight}`,
        "--card-image-outer-height": `${outerHeight}rem`,
        "--card-image-outer-width": `${outerWidth}rem`,
        "--card-image-inner-height": `${size}rem`,
    };

    return (
        <div className={styles["container-outer-image"]} style={newValues}>
            <div className={styles["container-inner-image"]}>
                <Image
                    src={`${imgSrc}`}
                    alt={`${imgAlt}`}
                    fill
                    priority
                />
            </div>
            <div className={styles["container-overlay-image"]}>
                <h6 className={styles["title-overlay"]}>{`${title ? title : ""}`}</h6>
                <h6 className={styles["subtitle-overlay"]}>{`${subtitle ? subtitle : ""}`}</h6>
            </div>
        </div >
    )
}