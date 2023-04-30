import Image from "next/image";
import styles from "./FooterIconsComponent.module.scss"

export default function FooterIconsComponent({ imgSrc }: { imgSrc: string }) {
    return (
        <div className={styles["container-outer-image"]}>
            <div className={styles["container-inner-image"]}>
                <Image
                    src={`${imgSrc}`}
                    alt="Icon"
                    fill
                    priority
                />
            </div>
        </div>
    )
}