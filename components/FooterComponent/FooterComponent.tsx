import Image from "next/image"
import styles from "./FooterComponent.module.scss"
import FooterIconsComponent from "../FooterIconsComponent/FooterIconsComponent"

export default function FooterComponent() {
    return (
        <div className={styles["container-section-footer"]}>
            <div className={styles["line-divider"]} />
            <div className={styles["footer-secondary"]}>
                <h4 className={styles["container-polices"]}>
                    © 2023 StrongWood | Todos los derechos reservados.
                </h4>
                <div className={styles["container-icons"]}>
                    {/* <a href="https://www.facebook.com/strongwood_ar" target="_blank" aria-label="Facebook StrongWood">
                        <FooterIconsComponent imgSrc="/assets/icons/facebook.svg" />
                    </a> */}
                    <a href="mailto:strongwoodventas@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email StrongWood">
                        <FooterIconsComponent imgSrc="/assets/icons/gmail.svg" />
                    </a>
                    <a href="https://instagram.com/strongwood_ar" target="_blank" rel="noopener noreferrer" aria-label="Instagram StrongWood">
                        <FooterIconsComponent imgSrc="/assets/icons/instagram.svg" />
                    </a>
                    <a href="https://wa.me/5491133346111" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp StrongWood">
                        <FooterIconsComponent imgSrc="/assets/icons/whatsapp.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}