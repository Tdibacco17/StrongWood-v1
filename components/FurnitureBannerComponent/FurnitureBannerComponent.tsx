import { ImgDataInterface } from "@/types/Interfaces"
import styles from "./FurnitureBannerComponent.module.scss"
import Image from "next/image"
import { useState } from "react";

export default function FurnitureBannerComponent({
    imgData
}: {
    imgData: ImgDataInterface | undefined
}) {

    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <div className={styles["container-outer-image"]} >
            {
                imgData &&
                <>
                    {
                        !imageLoaded && (
                            <div className={styles["container-inner-placeholder"]}>
                                Cargando...
                            </div>
                        )
                    }
                    <div className={imageLoaded ? styles["container-inner-image"] : ""}>
                        <Image
                            src={imgData.imgSrc}
                            alt={imgData.imgAlt}
                            fill
                            priority
                            onLoadingComplete={() => { setImageLoaded(true) }}
                            style={{ opacity: imageLoaded ? "1" : "0" }}
                        />
                    </div>
                </>
            }
        </div>
    )
}