import LayoutComponent from "@/layout/LayoutComponent";
import { DesignDetailProvider } from "@/context/DesignDetailProvider";
import DesignDetailContainer from "@/containers/DesignDetailContainer/DesignDetailContainer";

export default function DesignDetail() {

    return (
        <LayoutComponent isSlider={false} urlBack={"design"}>
            <DesignDetailProvider>
                <DesignDetailContainer />
            </DesignDetailProvider>
        </LayoutComponent>
    );
};