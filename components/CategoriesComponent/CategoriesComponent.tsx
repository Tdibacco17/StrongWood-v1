import styles from "./CategoriesComponent.module.scss"
import Link from "next/link"
import CategorieCardComponent from "../CategorieCardComponent/CategorieCardComponent"
import { useContext } from "react";
import { HomeContext } from "@/context/HomeProvider";
import { HomeDataContextInterface } from "@/types/Interfaces";

export default function HomeTwoCategoriesComponent() {
    const { homeData } = useContext(
        HomeContext
    ) as HomeDataContextInterface;

    return (
        <div className={styles["container-section-twoCategories"]}>
            {
                homeData && <Link href={`/design`}>
                    <CategorieCardComponent
                        imgSrc={`${homeData.categoriesImages[0].imgSrc}`}
                        imgAlt={`${homeData.categoriesImages[0].imgAlt}`}
                        imgProportionsX={homeData.categoriesImages[0].imgProportionsX}
                        imgProportionsY={homeData.categoriesImages[0].imgProportionsY}
                        title="Línea Design"
                        subtitle="El balance perfecto entre hierro y madera."
                    />
                </Link>
            }
            {
                homeData && <Link href={`/products`}>
                    <CategorieCardComponent
                        imgSrc={`${homeData.categoriesImages[1].imgSrc}`}
                        imgAlt={`${homeData.categoriesImages[1].imgAlt}`}
                        imgProportionsX={homeData.categoriesImages[1].imgProportionsX}
                        imgProportionsY={homeData.categoriesImages[1].imgProportionsY}
                        title="Línea Wood"
                        subtitle="El balance perfecto entre hierro y madera."
                    />
                </Link>
            }
        </div>
    )
}