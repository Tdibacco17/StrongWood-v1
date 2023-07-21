import DesignsContainer from "@/containers/DesignsContainer/DesignsContainer";
import LayoutComponent from "@/layout/LayoutComponent";

export default function DesignPage() {
    return (
        <LayoutComponent  buttonBack={true} isSlider={false} urlBack={""}>
            <DesignsContainer />
        </LayoutComponent>
    )
}