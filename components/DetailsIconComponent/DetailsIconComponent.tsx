import Image from "next/image";
import styles from "./DetailsIconComponent.module.scss"

export default function DetailsIconComponent({ imgSrc }: { imgSrc: string }) {
    return (
        <div className={styles["container-outer-image"]}>
            <div className={styles["container-inner-image"]}>
                <Image
                    src={`${imgSrc}`}
                    alt="Icon"
                    fill
                    // priority
                    loading="lazy"
                />
            </div>
        </div>
    )
}