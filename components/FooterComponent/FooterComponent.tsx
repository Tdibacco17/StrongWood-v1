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
                    <FooterIconsComponent imgSrc="/assets/icons/facebook.svg" />
                    <FooterIconsComponent imgSrc="/assets/icons/gmail.svg" />
                    <FooterIconsComponent imgSrc="/assets/icons/instagram.svg" />
                    <FooterIconsComponent imgSrc="/assets/icons/whatsapp.svg" />
                </div>
            </div>
        </div>
    )
}