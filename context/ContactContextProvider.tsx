import { ContactDataContextInterface } from "@/types/Interfaces";
import { ReactNode, createContext, useEffect, useState } from "react";

interface ProductProps {
    productTitle: string,
    paymentMethod: string,
    data?: any
}

interface DesignProps {
    designTitle: string,
    designItem: string,
    data?: any
}


export const ContactContext = createContext<ContactDataContextInterface | {}>({});

export const ContactProvider = ({ children, }: { children: ReactNode; }) => {

    const [infoProduct, setInfoProduct] = useState<ProductProps>({
        productTitle: "",
        paymentMethod: ""
    });

    const [infoFurniture, setInfoFurniture] = useState<DesignProps>({
        designTitle: "",
        designItem: "",
    })


    // console.log("[infoProduct-CONTEXT]: ", infoProduct);
    console.log("[infoFurniture-CONTEXT]: ", infoFurniture);

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