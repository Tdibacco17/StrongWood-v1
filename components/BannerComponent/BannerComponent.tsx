import Image from "next/image";
import styles from "./BannerComponent.module.scss";
import { CustomStyles } from "@/types/Interfaces";
import { useWindowSize } from "@/utils/size/useWindowSIze";

export default function BannerComponent({
    imgSrc,
    imgAlt,
    originalWidth,
    originalHeight,
}: {
    imgSrc: string;
    imgAlt: string;
    originalWidth: number;
    originalHeight: number;
}) {
    const { width, height } = useWindowSize();
    const isPortrait = height > width;

    const newValues: CustomStyles = {
        "--original-width": `${originalWidth}`,
        "--original-height": `${originalHeight}`,
        "--banner-image-inner-height": isPortrait ? "100vh" : "100vw",
        "--banner-image-proportion": isPortrait
            ? `calc((var(--banner-image-inner-height)) * (var(--original-height)) / (var(--original-width)))`
            : `calc((var(--banner-image-inner-height)) * (var(--original-width)) / (var(--original-height)))`,
    };

    return (
        <div className={styles["container-outer-image"]} style={newValues}>
            <div className={styles["container-inner-image"]}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    priority />
            </div>
            <div className={styles["container-overlay-image"]} />
        </div>
    );
}