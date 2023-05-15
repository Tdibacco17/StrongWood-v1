import styles from "./DetailsCarrouselImgComponent.module.scss"
import Image from "next/image";

export default function DetailsCarrouselImgComponent({
    imgSrc,
    imgAlt,
    imgProportionsX,
    handleImageClick
}: {
    imgSrc: string,
    imgAlt: string,
    imgProportionsX: number,
    handleImageClick: () => void;
}) {

    return (
        <div className={styles["container-outer-image"]} onClick={handleImageClick}>

            <div className={styles["container-inner-image"]}>
                <Image
                    src={`${imgSrc}`}
                    alt={`${imgAlt}`}
                    fill
                    priority
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <style jsx>{`
               .${styles["container-outer-image"]} {
                   --card-carrousel-image-proportion: calc((var(--card-carrousel-image-width)) * ${imgProportionsX});
               }
            `}</style>
        </div>
    )
}