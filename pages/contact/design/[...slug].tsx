import BackLinkUrlComponent from "@/components/BackLinkUrlComponent/BackLinkUrlComponent";
import LayoutComponent from "@/layout/LayoutComponent";

export default function ContactProductBug() {
    return (
        <LayoutComponent isSlider={false} urlBack={`/`}>
            <BackLinkUrlComponent backUrl={"/"} />
        </LayoutComponent>
    )
}