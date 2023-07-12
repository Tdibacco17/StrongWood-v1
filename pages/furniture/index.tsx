import LayoutComponent from "@/layout/LayoutComponent";
import BackLinkUrlComponent from "@/components/BackLinkUrlComponent/BackLinkUrlComponent";

export default function FurniturePage() {
    return (
        <LayoutComponent isSlider={false} urlBack={"/"} >
            <BackLinkUrlComponent backUrl={"/"} />
        </LayoutComponent>
    )
}