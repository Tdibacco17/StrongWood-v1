import Image from "next/image"
import styles from "./ImageComponent.module.scss"
import { ProjectInterface } from "@/types/ProductsTypes";

export default function ImageComponent({
    project,
}: {
    project: ProjectInterface;
}) {
    return (
        <div className={styles["container-outer-image"]}>
            <div className={styles["container-inner-image"]}>
                <Image
                    src={"/assets/img/home/twoCategories/strong1.jpg"}
                    alt="Video banner"
                    fill
                    priority
                />
            </div>
            <div className={styles["container-overlay-image"]}>
                <h6 className={styles["title-overlay"]}> STRONG DESIGN </h6>
            </div>
            <style jsx>
                {`
                    .${styles["image-outer-container"]} .proportional-width {
                        min-width: calc(
                            var(--card-standard-heigh) *
                                ${/* project.detail.portraitImg.imgProportionsX */ ""}
                        );
                        max-width: calc(
                            var(--card-standard-heigh) *
                        ${/*project.detail.portraitImg.imgProportionsX */""}
                        );
                    }
                `}
            </style>
        </div>
    )
}