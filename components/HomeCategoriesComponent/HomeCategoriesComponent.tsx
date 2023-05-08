import styles from "./HomeCategoriesComponent.module.scss"
import Link from "next/link"
import ImageCardComponent from "../ImageCardComponent/ImageCardComponent"

export default function HomeTwoCategoriesComponent() {
    return (
        <div className={styles["container-section-twoCategories"]}>
            <Link href={`/design`}>
                <ImageCardComponent
                    imgSrc="/assets/img/home/twoCategories/strong1.webp"
                    imgAlt="Imagen"
                    originalWidth={6048}
                    originalHeight={4024}
                    title="Línea Design"
                    subtitle="El balance perfecto entre hierro y madera."
                />
            </Link>
            <Link href={`/products`}>
                <ImageCardComponent
                    imgSrc="/assets/img/home/twoCategories/strong2.webp"
                    imgAlt="Imagen"
                    originalWidth={4016}
                    originalHeight={4016}
                    title="Línea Wood"
                    subtitle="El balance perfecto entre hierro y madera."
                />
            </Link>
        </div>
    )
}