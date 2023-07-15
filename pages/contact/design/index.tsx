import { ContactContext } from "@/context/ContactContextProvider";
import LayoutComponent from "@/layout/LayoutComponent";
import { ContactDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";
import ContactDesignContainer from "@/containers/ContactDesignContainer/ContactDesignContainer";
import BackLinkUrlComponent from "@/components/BackLinkUrlComponent/BackLinkUrlComponent";

export default function ContactFurnituretPage() {

    const { infoFurniture } = useContext(
        ContactContext
    ) as ContactDataContextInterface;

    if (infoFurniture?.designTitle === "") {
        return (
            <LayoutComponent isSlider={false} urlBack={`design/`}>
                <BackLinkUrlComponent textData={"Ocurrió algo inesperado"} backUrl={"/design"} />
            </LayoutComponent>
        )
    }
    
    return (
        <LayoutComponent isSlider={false}
            urlBack={`furniture/${infoFurniture?.designTitle}?item=${infoFurniture?.designItem}`}>
            <ContactDesignContainer slug={infoFurniture?.designTitle} item={infoFurniture?.designItem} />
        </LayoutComponent>
    )
}