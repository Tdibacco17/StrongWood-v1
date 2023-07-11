import { ContactContext } from "@/context/ContactContextProvider";
import LayoutComponent from "@/layout/LayoutComponent";
import { ContactDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";
import styles from "./index.module.scss"
import Link from "next/link";
import ContactDesignContainer from "@/containers/ContactDesignContainer/ContactDesignContainer";

export default function ContactFurnituretPage() {

    const { infoFurniture } = useContext(
        ContactContext
    ) as ContactDataContextInterface;

    if (!infoFurniture.designTitle) {
        return (
            <LayoutComponent isSlider={false} urlBack={`design/`}>
                <div className={styles["container-link"]}>
                    <p>Ocurrió algo inesperado</p>
                    <Link className={styles["link"]} href={"/design"}>VOLVER</Link>
                </div>
            </LayoutComponent>
        )
    }

    return (
        <LayoutComponent isSlider={false}
            urlBack={`furniture/${infoFurniture.designTitle}?item=${infoFurniture.designItem}`}>
            <ContactDesignContainer slug={infoFurniture.designTitle} item={infoFurniture.designItem} />
        </LayoutComponent>
    )
}