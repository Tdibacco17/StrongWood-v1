import Image from "next/image"
import styles from "./ContactModalComponent.module.scss"

export default function ContactModalComponent({ textData }: { textData: string }) {
    return (
        <div className={styles["container-section-modal"]}>
            <div className={styles["card-modal"]}>
                <p className={styles["text-modal"]}>{textData}</p>
                <Image
                    src={"/assets/icons/check.svg"}
                    alt="Icono Check"
                    width={18}
                    height={18}
                    loading="lazy"
                    className={styles["check-icon"]}
                />
            </div>
        </div>
    )
}