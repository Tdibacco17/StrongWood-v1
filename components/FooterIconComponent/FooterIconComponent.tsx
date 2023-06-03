import Image from "next/image";
import styles from "./FooterIconComponent.module.scss"

export default function FooterIconComponent({ imgSrc }: { imgSrc: string }) {
    return (
        <div className={styles["container-outer-image"]}>
            <div className={styles["container-inner-image"]}>
                <Image
                    src={`${imgSrc}`}
                    alt="Icon"
                    fill
                    loading="lazy"
                />
            </div>
        </div>
    )
}