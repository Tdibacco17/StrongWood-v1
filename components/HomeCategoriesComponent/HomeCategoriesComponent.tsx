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
                    outerHeight={32.5}
                    outerWidth={32.5}
                    size={32.5}
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
                    outerHeight={32.5}
                    outerWidth={32.5}
                    size={32.5}
                    title="Línea Wood"
                    subtitle="El balance perfecto entre hierro y madera."
                />
            </Link>
        </div>
    )
}