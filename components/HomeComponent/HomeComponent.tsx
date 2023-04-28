import Image from "next/image"
import styles from "./HomeComponent.module.scss"

export default function HomeComponent() {
    return (
        <div className={styles["container-section-home"]}>

            <div className={styles["container-videobanner"]}>
                <div className={styles["container-outer-image"]}>
                    <div className={styles["container-inner-image"]}>
                        <Image
                            src={"/assets/img/home-page/Strong_Wood_Set-17.jpg"}
                            alt="Video banner"
                            fill
                        />
                    </div>
                    <div className={styles["container-overlay-image"]} />
                </div>
            </div>

            <div className={styles["container-general-categories"]}>
                <div className={styles["container-outer-image"]}>
                    <div className={styles["container-inner-image"]}>
                        <Image
                            src={"/assets/img/home-page/Strong_Wood_Set-17.jpg"}
                            alt="Video banner"
                            fill
                        />
                    </div>
                    <div className={styles["container-overlay-image"]} />
                </div>
                <div className={styles["container-outer-image"]}>
                    <div className={styles["container-inner-image"]}>
                        <Image
                            src={"/assets/img/home-page/Strong_Wood_Set-17.jpg"}
                            alt="Video banner"
                            fill
                        />
                    </div>
                    <div className={styles["container-overlay-image"]} />
                </div>
            </div>

        </div >
    )
}