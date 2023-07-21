import LayoutComponent from "@/layout/LayoutComponent";
import { DesignDetailProvider } from "@/context/DesignDetailProvider";
import DesignDetailContainer from "@/containers/DesignDetailContainer/DesignDetailContainer";

export default function DesignDetailPage() {

    return (
        <LayoutComponent  buttonBack={true} isSlider={false} urlBack={"design"}>
            <DesignDetailProvider>
                <DesignDetailContainer />
            </DesignDetailProvider>
        </LayoutComponent>
    );
};