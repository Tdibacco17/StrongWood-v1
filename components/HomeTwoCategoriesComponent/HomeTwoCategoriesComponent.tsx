import Image from "next/image"
import styles from "./HomeTwoCategoriesComponent.module.scss"

export default function HomeTwoCategoriesComponent() {
    return (
        <div className={styles["container-section-twoCategories"]}>
            <div className={styles["container-outer-image"]}>
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={"/assets/img/home/twoCategories/strong1.jpg"}
                        alt="Video banner"
                        fill
                        priority
                    />
                </div>
                <div className={styles["container-overlay-image"]}>
                    <h6 className={styles["title-overlay"]}> STRONG DESIGN </h6>
                </div>
            </div>
            <div className={styles["container-outer-image"]}>
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={"/assets/img/home/twoCategories/strong2.jpg"}
                        alt="Video banner"
                        fill
                        priority
                    />
                </div>
                <div className={styles["container-overlay-image"]}>
                    <h6 className={styles["title-overlay"]}> STRONG WOOD </h6>
                </div>
            </div>
        </div>
    )
}