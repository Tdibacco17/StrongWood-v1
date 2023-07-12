import Image from "next/image"
import styles from "./ContactModalComponent.module.scss"

export default function ContactModalComponent({ textData, check }: { textData: string, check: boolean }) {
    return (
        <div className={styles["container-section-modal"]}>
            <div className={styles["card-modal"]}>
                <p className={styles["text-modal"]}>{textData}</p>
                {
                    check ?
                        <Image
                            src={"/assets/icons/check.svg"}
                            alt="Icono Check"
                            width={18}
                            height={18}
                            loading="lazy"
                            className={styles["check-icon"]}
                        /> : <Image
                            src={"/assets/icons/close.svg"}
                            alt="Icono Close"
                            width={22}
                            height={22}
                            loading="lazy"
                            className={styles["check-icon"]}
                        />
                }
            </div>
        </div>
    )
}