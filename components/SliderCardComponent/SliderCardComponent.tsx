import Image from "next/image";
import styles from "./SliderCardComponent.module.scss";

export default function SliderCardComponent({
    imgSrc,
    imgAlt,
    imgProportionsX,
    imgProportionsY
}: {
    imgSrc: string;
    imgAlt: string;
    imgProportionsX?: number;
    imgProportionsY?: number;
}) {

    return (
        <div className={styles["container-outer-image"]} >
            <div className={styles["container-inner-image"]}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    priority
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className={styles["container-overlay-image"]} />
            {/* <style jsx>{`
                .${styles["container-outer-image"]} {
                    --banner-proportion-height:calc((var(--banner-image-outer-width)) * ${imgProportionsY});
                    --banner-proportion-width: calc(100vh * ${imgProportionsX});

                    min-height: var(--banner-image-outer-height);
                    max-height: var(--banner-image-outer-height);
                    min-width: var(--banner-image-outer-width);
                    max-width: var(--banner-image-outer-width);
                    .${styles["container-inner-image"]} {
                        min-height: var(--banner-proportion-height);
                        max-height: var(--banner-proportion-height);
                        min-width: var(--banner-image-outer-width);
                        max-width: var(--banner-image-outer-width);
                    }
                }
                @media (max-width: 1100px) {
                    .${styles["container-outer-image"]} {
                        min-height: var(--banner-proportion-height);
                        max-height: var(--banner-proportion-height);
                        min-width: var(--banner-image-outer-width);
                        max-width: var(--banner-image-outer-width);
                    }
                }
                @media (max-width: 768px) {
                    .${styles["container-outer-image"]} {
                        min-height: 100vh;
                        max-height: 100vh;
                        min-width: var(--banner-image-outer-width);
                        max-width: var(--banner-image-outer-width);
                        .${styles["container-inner-image"]} {
                            min-height: 100vh;
                            max-height: 100vh;
                            min-width: var(--banner-proportion-width);
                            max-width: var(--banner-proportion-width);
                        }
                    }
                }
                `}</style> */}
        </div>
    );
}