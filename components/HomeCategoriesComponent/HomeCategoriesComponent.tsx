import styles from "./HomeCategoriesComponent.module.scss"
import Link from "next/link"
import CardComponent from "../CardComponent/CardComponent"

export default function HomeTwoCategoriesComponent() {
    return (
        <div className={styles["container-section-twoCategories"]}>
            <Link href={`/design`}>
                <CardComponent
                    imgSrc="/assets/img/home/twoCategories/strong1.jpg"
                    imgAlt="Imagen"
                    originalWidth={6048}
                    originalHeight={4024}
                    outerHeight={30}
                    outerWidth={30}
                    size={30}
                    title="Línea Wood"
                    subtitle="El balance perfecto entre hierro y madera."
                />
            </Link>
            <Link href={`/products`}>
                <CardComponent
                    imgSrc="/assets/img/home/twoCategories/strong2.jpg"
                    imgAlt="Imagen"
                    originalWidth={4016}
                    originalHeight={4016}
                    outerHeight={30}
                    outerWidth={30}
                    size={30}
                    title="Línea Wood"
                    subtitle="El balance perfecto entre hierro y madera."
                />
            </Link>
        </div>
    )
}