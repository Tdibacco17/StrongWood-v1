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
        "--banner-image-inner-width-height": isPortrait ? "100vh" : "100vw",
        "--banner-image-proportion": isPortrait
            ? `calc((var(--banner-image-inner-width-height)) * (var(--original-height)) / (var(--original-width)));
            .container-inner-image {
                position: relative;
                min-height: 75vh;
                max-height: 75vh;
                min-width: var(--banner-image-proportion);
                max-width: var(--banner-image-proportion);
            }`
            : `calc((var(--banner-image-inner-width-height)) * (var(--original-height)) / (var(--original-width)));
            .container-inner-image {
                position: relative;
                min-height: var(--banner-image-proportion);
                max-height: var(--banner-image-proportion);
                min-width: 100vw;
                max-width: 100vw;
            }`,
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