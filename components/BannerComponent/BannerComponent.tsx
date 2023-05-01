import Image from "next/image";
import styles from "./BannerComponent.module.scss"
import { CustomStyles } from "@/types/Interfaces";

export default function BannerComponent({
    imgSrc,
    imgAlt,
    originalWidth,
    originalHeight,
}: {
    imgSrc: string,
    imgAlt: string,
    originalWidth: number,
    originalHeight: number,
}) {

    const newValues: CustomStyles = {
        "--original-width": `${originalWidth}`,
        "--original-height": `${originalHeight}`,
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
        </div>
    )
}
