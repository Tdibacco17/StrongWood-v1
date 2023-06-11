import DesignComponent from "@/components/DesignComponent/DesignComponent";
import LayoutComponent from "@/layout/LayoutComponent";

export default function DesignPage() {
    return (
        <LayoutComponent isSlider={false} urlBack={""}>
            <DesignContainer />
        </LayoutComponent>
    )
}