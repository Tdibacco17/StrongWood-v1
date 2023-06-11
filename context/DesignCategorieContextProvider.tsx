import { DesignDataContextInterface, DesignDataInterface } from "@/types/Interfaces"
import { ReactNode, createContext, useState } from "react";

export const DesignCategorieContext = createContext<DesignDataInterface | {}>({});

export const DesignCategoriesProvider = ({ children }: { children: ReactNode }) => {
    const [designData, setDesignData] = useState<DesignDataContextInterface>({});

    const handleDesignDataChange = (designData: DesignDataContextInterface) => {
        setDesignData(designData);
    };

    return (
        <DesignCategorieContext.Provider
            value={{ designData, handleDesignDataChange }}
        >
            {children}
        </DesignCategorieContext.Provider>
    );
};