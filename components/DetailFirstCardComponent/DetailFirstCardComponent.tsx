import { ImgDataInterface } from "@/types/Interfaces";
import styles from "./DetailFirstCardComponent.module.scss"
import Image from "next/image";

export default function DetailFirstCardComponent({
    imgSlug,
    imgSrc,
    imgAlt,
    originalWidth,
    originalHeight,
    outerWidth,
    outerHeight,
}: {
    imgSlug: number,
    imgSrc: string,
    imgAlt: string,
    originalWidth: number,
    originalHeight: number,
    outerWidth: number,
    outerHeight: number,
}) {

    return (
        <div className={styles["container-inner-image"]}>
            <Image
                src={`${imgSrc}`}
                alt={`${imgAlt}`}
                fill
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    )
}