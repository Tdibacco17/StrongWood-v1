'use client'
import FurnitureContainer from "@/containers/FurnitureContainer/FurnitureContainer";
import LayoutComponent from "@/layout/LayoutComponent";
import { useRouter } from "next/router";

import { furnitureCocina } from "@/models/furniture/cocina";
import { furnitureBaño } from "@/models/furniture/baño";
import { furniturePlacares } from "@/models/furniture/placares"
import { dormitorioCama, dormitorioComoda, dormitorioMezaDeLuz } from "@/models/furniture/dormitorio"
import { FurnitureTableInterface } from "@/types/Interfaces";
import BackLinkUrlComponent from "@/components/BackLinkUrlComponent/BackLinkUrlComponent";

export default function FurnitureDetailPage() {

    const router = useRouter()
    const { slug, item } = router.query;

    let furnitureData: FurnitureTableInterface[];
    let designSlug: string;

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
    } else if (slug === "dormitorio") {
        if (item === "cama-1" || item === "cama-2" || item === "cama-3") {
            furnitureData = dormitorioCama.data;
            designSlug = dormitorioCama.designSlug;
        } else if (item === "mesa-de-luz-1" || item === "mesa-de-luz-2") {
            furnitureData = dormitorioMezaDeLuz.data;
            designSlug = dormitorioMezaDeLuz.designSlug;
        } else if (item === "comoda-1" || item === "comoda-2") {
            furnitureData = dormitorioComoda.data;
            designSlug = dormitorioComoda.designSlug;
        } else {
            return (
                <LayoutComponent isSlider={false} urlBack={`/design`}>
                    <BackLinkUrlComponent textData={"Esta categoria no existe"} backUrl={"/design"} />
                </LayoutComponent>
            )
        }
    } else {
        return (
            <LayoutComponent isSlider={false} urlBack={`/design`}>
                <BackLinkUrlComponent textData={"Esta categoria no existe"} backUrl={"/design"} />
            </LayoutComponent>
        )
    }

    return (
        <LayoutComponent isSlider={false} urlBack={`design/${slug}`}>
            <FurnitureContainer furnitureData={furnitureData} item={item as string} designSlug={designSlug as string} />
        </LayoutComponent>
    )
}