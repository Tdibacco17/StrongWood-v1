import styles from "./HomeCategoriesComponent.module.scss"
import HomeCategorieCardComponent from "../HomeCategorieCardComponent/HomeCategorieCardComponent"
import { useContext } from "react";
import { HomeContext } from "@/context/HomeProvider";
import { HomeDataContextInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";

export default function HomeCategoriesComponent() {
    const { homeData } = useContext(
        HomeContext
    ) as HomeDataContextInterface;

    const router = useRouter()

    return (
        <div className={styles["container-section-categories"]}>
            {
                homeData &&
                <div onClick={() => { router.push("/design") }}>
                    <HomeCategorieCardComponent
                        imgSrc={`${homeData.categoriesImages[0].imgSrc}`}
                        imgAlt={`${homeData.categoriesImages[0].imgAlt}`}
                        imgProportionsX={homeData.categoriesImages[0].imgProportionsX}
                        imgProportionsY={homeData.categoriesImages[0].imgProportionsY}
                        title="Línea Design"
                        subtitle="Diseños personalizados"
                    />
                </div>
            }
            {
                homeData &&
                <div onClick={() => { router.push("/products") }}>
                    <HomeCategorieCardComponent
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