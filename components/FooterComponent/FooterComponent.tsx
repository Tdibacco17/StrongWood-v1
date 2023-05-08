import styles from "./FooterComponent.module.scss"
import IconComponent from "../IconComponent/IconComponent"

export default function FooterComponent() {
    return (
        <div className={styles["container-section-footer"]}>
            <div className={styles["line-divider"]} />
            <div className={styles["footer-secondary"]}>
                <h4 className={styles["container-polices"]}>
                    © 2023 StrongWood - Todos los derechos reservados.
                </h4>
                <div className={styles["container-icons"]}>
                    <a href="mailto:strongwoodventas@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email StrongWood">
                        <IconComponent imgSrc="/assets/icons/gmail.svg" />
                    </a>
                    <a href="https://instagram.com/strongwood_ar" target="_blank" rel="noopener noreferrer" aria-label="Instagram StrongWood">
                        <IconComponent imgSrc="/assets/icons/instagram.svg" />
                    </a>
                    <a href="https://wa.me/5491133346111" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp StrongWood">
                        <IconComponent imgSrc="/assets/icons/whatsapp.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}