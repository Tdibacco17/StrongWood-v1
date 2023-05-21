import styles from "./CategoriesComponent.module.scss"
import CategorieCardComponent from "../CategorieCardComponent/CategorieCardComponent"
import { useContext } from "react";
import { HomeContext } from "@/context/HomeProvider";
import { HomeDataContextInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";

export default function HomeTwoCategoriesComponent() {
    const { homeData } = useContext(
        HomeContext
    ) as HomeDataContextInterface;

    const router = useRouter()

    return (
        <div className={styles["container-section-twoCategories"]}>
            {
                homeData &&
                <div onClick={() => { router.push("/design") }}>
                    <CategorieCardComponent
                        imgSrc={`${homeData.categoriesImages[0].imgSrc}`}
                        imgAlt={`${homeData.categoriesImages[0].imgAlt}`}
                        imgProportionsX={homeData.categoriesImages[0].imgProportionsX}
                        imgProportionsY={homeData.categoriesImages[0].imgProportionsY}
                        title="Línea Design"
                        subtitle="Diseña tu cocina"
                    />
                </div>
            }
            {
                homeData &&
                <div onClick={() => { router.push("/products") }}>
                    <CategorieCardComponent
                        imgSrc={`${homeData.categoriesImages[1].imgSrc}`}
                        imgAlt={`${homeData.categoriesImages[1].imgAlt}`}
                        imgProportionsX={homeData.categoriesImages[1].imgProportionsX}
                        imgProportionsY={homeData.categoriesImages[1].imgProportionsY}
                        title="Línea Wood"
                        subtitle="Ver productos"
                    />
                </div>
            }
        </div>
    )
}