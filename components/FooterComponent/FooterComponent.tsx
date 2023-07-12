import FooterIconComponent from "../FooterIconComponent/FooterIconComponent"
import styles from "./FooterComponent.module.scss"

export default function FooterComponent() {
    return (
        <div className={styles["container-section-footer"]}>
            <div className={styles["line-divider"]} />
            <div className={styles["footer-secondary"]}>
                <p className={styles["container-polices"]}>
                    © 2023 StrongWood - Todos los derechos reservados.
                </p>
                <div className={styles["container-icons"]}>
                    <a
                        href="mailto:strongwoodventas@gmail.com"
                        target="_blank"
                        rel="preload" 
                        aria-label="Email StrongWood"
                    >
                        <FooterIconComponent imgSrc="/assets/icons/gmail.svg" />
                    </a>
                    <a
                        href="https://instagram.com/strongwood_ar"
                        target="_blank"
                        rel="preload" 
                        aria-label="Instagram StrongWood"
                    >
                        <FooterIconComponent imgSrc="/assets/icons/instagram.svg" />
                    </a>
                    <a
                        href="https://wa.me/5491133346111"
                        target="_blank"
                        rel="preload" 
                        aria-label="Whatsapp StrongWood"
                    >
                        <FooterIconComponent imgSrc="/assets/icons/whatsapp.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}