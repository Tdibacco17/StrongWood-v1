import Link from "next/link";
import styles from "./BackLinkUrlComponent.module.scss"

export default function BackLinkUrlComponent({ backUrl }: { backUrl: string }) {
    return (
        <div className={styles["container-link"]}>
            <p>Ocurrió algo inesperado</p>
            <Link className={styles["link"]} href={backUrl}>VOLVER</Link>
        </div>
    )
}