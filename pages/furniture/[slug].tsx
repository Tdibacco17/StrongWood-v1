'use client'
import FurnitureContainer from "@/containers/FurnitureContainer/FurnitureContainer";
import LayoutComponent from "@/layout/LayoutComponent";
import { useRouter } from "next/router";

import { furnitureCocina } from "@/models/furniture/cocina";
import { furnitureBaño } from "@/models/furniture/baño";
import { furniturePlacares } from "@/models/furniture/placares"
import { FurnitureTableInterface } from "@/types/Interfaces";
import { DesignDetailProvider } from "@/context/DesignDetailProvider";

export default function FurnitureDetailPage() {

    const router = useRouter()
    const { slug, item } = router.query;

    let furnitureData: FurnitureTableInterface[] = [];
    let designSlug: string = "";

    //VALIDAR MEJOR ESTO EN EL RUTEO 
    if (slug === "cocina") {
        furnitureData = furnitureCocina.data;
        designSlug = furnitureCocina.designSlug;
    } else if (slug === "baño") {
        furnitureData = furnitureBaño.data;
        designSlug = furnitureBaño.designSlug;
    } else if (slug === "placares") {
        furnitureData = furniturePlacares.data
        designSlug = furniturePlacares.designSlug;
    }

    return (
        <LayoutComponent buttonBack={true} isSlider={true} urlBack={`design/${slug}`}>
            <DesignDetailProvider>
                <FurnitureContainer furnitureData={furnitureData} item={item as string} designSlug={designSlug as string} />
            </DesignDetailProvider>
        </LayoutComponent>
    )
}