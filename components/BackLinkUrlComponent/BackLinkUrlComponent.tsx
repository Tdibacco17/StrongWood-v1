import Link from "next/link";
import styles from "./BackLinkUrlComponent.module.scss"

export default function BackLinkUrlComponent({ textData, backUrl }: { textData: string, backUrl: string }) {
    return (
        <div className={styles["container-link"]}>
            <p>{textData}</p>
            <Link className={styles["link"]} href={backUrl}>VOLVER</Link>
        </div>
    )
}