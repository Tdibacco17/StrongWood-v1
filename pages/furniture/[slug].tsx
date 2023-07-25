'use client'
import FurnitureContainer from "@/containers/FurnitureContainer/FurnitureContainer";
import LayoutComponent from "@/layout/LayoutComponent";
import { useRouter } from "next/router";

import { furnitureCocina } from "@/models/furniture/cocina";
import { furnitureBaño } from "@/models/furniture/baño";
import { furniturePlacares } from "@/models/furniture/placares"
import { FurnitureTableInterface, MeasureDataInterface } from "@/types/Interfaces";
import { DesignDetailProvider } from "@/context/DesignDetailProvider";

import { measuresCocina } from "@/models/furniture/cocina";
import { measuresPlacares } from "@/models/furniture/placares";


export default function FurnitureDetailPage() {

    const router = useRouter()
    const { slug, item } = router.query;

    let furnitureData: FurnitureTableInterface[] = [];
    let designSlug: string = "";
    let measureData: MeasureDataInterface = {};

    if (slug === "cocina") {
        furnitureData = furnitureCocina.data;
        designSlug = furnitureCocina.designSlug;
        measureData = measuresCocina;
    } else if (slug === "baño") {
        furnitureData = furnitureBaño.data;
        designSlug = furnitureBaño.designSlug;
        measureData = {};
    } else if (slug === "placares") {
        furnitureData = furniturePlacares.data
        designSlug = furniturePlacares.designSlug;
        measureData = measuresPlacares;
    }

    return (
        <LayoutComponent buttonBack={true} isSlider={true} urlBack={`design/${slug}`}>
            <DesignDetailProvider>
                <FurnitureContainer
                    measureData={measureData}
                    furnitureData={furnitureData}
                    item={item as string}
                    designSlug={designSlug as string} />
            </DesignDetailProvider>
        </LayoutComponent>
    )
}