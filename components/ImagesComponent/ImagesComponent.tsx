import { CustomStyles, ImgDataInterface } from "@/types/Interfaces";
import styles from "./ImagesComponent.module.scss"
import Image from "next/image";

export default function ImagesComponent({
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
            />
        </div>
    )
}