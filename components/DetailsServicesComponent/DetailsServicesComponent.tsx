import DetailsIconComponent from "../DetailsIconComponent/DetailsIconComponent"
import styles from "./DetailsServicesComponent.module.scss"

export default function DetailsServicesComponent() {
    return (
        <div className={styles["container-section-services"]}>
            <div className={styles["icons-info"]}>
                <DetailsIconComponent imgSrc="/assets/icons/shippingCar.svg" />
                <p className={styles["icons-title"]}>ENVÍOS GRATIS</p>
                <p className={styles["icons-subtitle"]}>PARA COMPRAS DE MÁS DE $100</p>
            </div>
            <div className={styles["line-divider"]} />
            <div className={styles["icons-info"]}>
                <DetailsIconComponent imgSrc="/assets/icons/creditCard.svg" />
                <p className={styles["icons-title"]}>HASTA 12 CUOTAS SIN INTERÉS</p>
                <p className={styles["icons-subtitle"]}>CON TODAS LAS TARJETAS DE CRÉDITO</p>
            </div>
            <div className={styles["line-divider"]} />
            <div className={styles["icons-info"]}>
                <DetailsIconComponent imgSrc="/assets/icons/hands.svg" />
                <p className={styles["icons-title"]}>COMPRA SEGURA</p>
                <p className={styles["icons-subtitle"]}>DEVOLUCIÓN DENTRO DE LAS 48HS</p>
            </div>
        </div>
    )
}