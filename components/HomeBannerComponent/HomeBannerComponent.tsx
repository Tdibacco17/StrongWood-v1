import Image from "next/image";
import styles from "./HomeBannerComponent.module.scss"

export default function HomeBannerComponent() {
    return (
        <div className={styles["container-section-banner"]}>
            <div className={styles["container-outer-image"]}>
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={"/assets/img/home/banner/strong3.jpg"}
                        alt="Video banner"
                        fill
                        priority
                    />
                </div>
                <div className={styles["container-overlay-image"]} />
            </div>
        </div>
    )
}