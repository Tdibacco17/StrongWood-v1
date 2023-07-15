import Image from "next/image"
import styles from "./ContactModalComponent.module.scss"

export default function ContactModalComponent({ textData, check }: { textData?: string, check: boolean }) {
    return (
        <div className={styles["container-section-modal"]}>
            <div className={styles["card-modal"]}>
                {
                    check ?
                        <>
                            <p className={styles["text-modal"]}>Email enviado con exito.</p>
                            <Image
                                src={"/assets/icons/check.svg"}
                                alt="Icono Check"
                                width={18}
                                height={18}
                                loading="lazy"
                                className={styles["check-icon"]}
                            />
                        </>
                        : <>
                            <p className={styles["text-modal"]}>Error al enviar el email.</p>
                            <Image
                                src={"/assets/icons/close.svg"}
                                alt="Icono Close"
                                width={22}
                                height={22}
                                loading="lazy"
                                className={styles["check-icon"]}
                            />
                        </>
                }
                {/* <p className={styles["text-modal"]}>{textData}</p> */}
            </div>
        </div>
    )
}