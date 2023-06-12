import DesignContainer from "@/containers/DesignContainer/DesignContainer";
import LayoutComponent from "@/layout/LayoutComponent";

export default function DesignPage() {
    return (
        <LayoutComponent isSlider={false} urlBack={""}>
            <DesignContainer />
        </LayoutComponent>
    )
}