import Image from "next/image"
import styles from "./HomeTwoCategoriesComponent.module.scss"
import Link from "next/link"

export default function HomeTwoCategoriesComponent() {
    return (
        <div className={styles["container-section-twoCategories"]}>
            <Link href={`/design`}>
                <div className={styles["container-outer-image"]}>
                    <div className={styles["container-inner-image"]}>
                        <Image
                            src={"/assets/img/home/twoCategories/strong1.jpg"}
                            alt="Image banner"
                            fill
                            priority
                        />
                    </div>
                    <div className={styles["container-overlay-image"]}>
                        <h6 className={styles["title-overlay"]}> Línea Design </h6>
                        <h6 className={styles["subtitle-overlay"]}>Diseños exclusivos en amoblamientos</h6>
                    </div>
                </div>
            </Link>
            <Link href={`/products`}>
                <div className={styles["container-outer-image"]}>
                    <div className={styles["container-inner-image"]}>
                        <Image
                            src={"/assets/img/home/twoCategories/strong2.jpg"}
                            alt="Image banner"
                            fill
                            priority
                        />
                    </div>
                    <div className={styles["container-overlay-image"]}>
                        <h6 className={styles["title-overlay"]}> Línea Wood </h6>
                        <h6 className={styles["subtitle-overlay"]}>El balance perfecto entre hierro y madera.</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}