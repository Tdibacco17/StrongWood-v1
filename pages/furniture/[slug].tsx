import FurnitureContainer from "@/containers/FurnitureContainer/FurnitureContainer";
import LayoutComponent from "@/layout/LayoutComponent";
import { useRouter } from "next/router";

export default function FurnitureDetailPage() {

    const router = useRouter()
    const { slug, item } = router.query

    return (
        <LayoutComponent isSlider={false} urlBack={`design/${slug}`}>
            <FurnitureContainer furnitureStyle={item as string} slug={slug as string} />
        </LayoutComponent>
    )
}