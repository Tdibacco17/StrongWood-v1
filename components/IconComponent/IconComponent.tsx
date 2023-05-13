import Image from "next/image";
import styles from "./IconComponent.module.scss"

export default function FooterIconComponent({ imgSrc }: { imgSrc: string }) {
    return (
        <div className={styles["container-outer-image"]}>
            <div className={styles["container-inner-image"]}>
                <Image
                    src={`${imgSrc}`}
                    alt="Icon"
                    fill
                    // priority
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                />
            </div>
        </div>
    )
}