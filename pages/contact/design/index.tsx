import { ContactContext } from "@/context/ContactContextProvider";
import LayoutComponent from "@/layout/LayoutComponent";
import { ContactDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";


export default function ContactFurnituretPage() {

    const { infoFurniture } = useContext(
        ContactContext
    ) as ContactDataContextInterface;

    if (!infoFurniture.designTitle) {
        // GUARDAR EN CACHE? O VALIDAR SI ALGUIEN TOCA F5
        return <>SE RECARGO LA PAGINA CON F5</>
    }

    return (
        <LayoutComponent isSlider={false} urlBack={`furniture/${infoFurniture.designTitle}?item=${infoFurniture.designItem}`}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {JSON.stringify(infoFurniture)}
        </LayoutComponent>
    )
}