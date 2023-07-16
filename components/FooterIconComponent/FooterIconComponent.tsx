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
                    sizes="(max-width: 480px) 1.2rem, (max-width: 768px) 1.5rem, (max-width: 992px) 1.6rem, 1.7rem"
                />
            </div>
        </div>
    )
}