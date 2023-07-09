import { ContactDataContextInterface, ContactDesignInterface, ContactProductInterface } from "@/types/Interfaces";
import { ReactNode, createContext, useState } from "react";

interface ProductProps {
    productTitle: string,
    paymenMethod: string,
    data?: any
}

interface DesignProps {
    designTitle: string,
    designItem: string,
    data?: any
}

export const ContactContext = createContext<ContactDataContextInterface | {}>({});

export const ContactProvider = ({ children, }: { children: ReactNode; }) => {
    // const [contactData, setContactData] = useState<ContactDesignInterface | ContactProductInterface | undefined>(undefined);

    // const handleContactDataChange = (contactData: ContactDesignInterface | ContactProductInterface) => {
    //     setInfoProduct(infoProduct);
    // };

    const [infoProduct, setInfoProduct] = useState<ProductProps>({
        productTitle: "",
        paymenMethod: ""
    });
    const [infoFurniture, setInfoFurniture] = useState<DesignProps>({
        designTitle: "",
        designItem: "",
    })

    console.log("[infoProduct-CONTEXT]: ", infoProduct);
    console.log("[infoFurniture-CONTEXT]: ", infoFurniture);

    return (
        <ContactContext.Provider
            value={{
                // contactData, handleContactDataChange,
                setInfoProduct, infoProduct,
                setInfoFurniture, infoFurniture
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};