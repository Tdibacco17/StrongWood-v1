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
    let designTitle: string;

    //VALIDAR MEJOR ESTO EN EL RUTEO 
    if (slug === "cocina") {
        furnitureData = furnitureCocina.data;
        designTitle = furnitureCocina.designTitle;
    } else if (slug === "baño") {
        furnitureData = furnitureBaño.data;
        designTitle = furnitureBaño.designTitle;
    } else if (slug === "placares") {
        furnitureData = furniturePlacares.data
        designTitle = furniturePlacares.designTitle;
    } else if (slug === "dormitorio") {
        if (item === "cama-1" || item === "cama-2" || item === "cama-3") {
            furnitureData = dormitorioCama.data;
            designTitle = dormitorioCama.designTitle;
        } else if (item === "mesa-de-luz-1" || item === "mesa-de-luz-2") {
            furnitureData = dormitorioMezaDeLuz.data;
            designTitle = dormitorioMezaDeLuz.designTitle;
        } else if (item === "comoda-1" || item === "comoda-2") {
            furnitureData = dormitorioComoda.data;
            designTitle = dormitorioComoda.designTitle;
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
            <FurnitureContainer furnitureData={furnitureData} item={item as string} designTitle={designTitle as string} />
        </LayoutComponent>
    )
}