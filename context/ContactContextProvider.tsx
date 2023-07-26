import { ContactDataContextInterface, ImgDataInterface } from "@/types/Interfaces";
import { ReactNode, createContext, useEffect, useState } from "react";

interface ProductProps {
    productSlug: string,
    paymentMethod: string,
    productPrice: string,
}

interface DesignProps {
    designSlug: string,
    designItem: string,
    data?: any,
    measures?: any,
    imageData?: ImgDataInterface
}

export const ContactContext = createContext<ContactDataContextInterface | {}>({});

export const ContactProvider = ({ children, }: { children: ReactNode; }) => {

    const [infoProduct, setInfoProduct] = useState<ProductProps>({
        productSlug: "",
        paymentMethod: "",
        productPrice: ""
    });

    const [infoFurniture, setInfoFurniture] = useState<DesignProps>({
        designSlug: "",
        designItem: "",
    })

    useEffect(() => {

    }, [infoProduct])

    return (
        <ContactContext.Provider
            value={{
                // contactData, handleContactDataChange,
                infoProduct, setInfoProduct,
                infoFurniture, setInfoFurniture
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};