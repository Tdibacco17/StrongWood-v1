import FurnitureComponent from "@/components/FurnitureComponent/FurnitureComponent";
import LayoutComponent from "@/layout/LayoutComponent";
import { useRouter } from "next/router";

export default function FurnitureDetailPage() {

    const router = useRouter()
    const { slug } = router.query

    return (
        <LayoutComponent isSlider={false} urlBack={`/design`}>
            <FurnitureComponent subcategorie={slug as string} />
        </LayoutComponent>
    )
}