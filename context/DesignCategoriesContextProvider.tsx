import { DesignDataContextInterface, DesignDataInterface } from "@/types/Interfaces"
import { ReactNode, createContext, useState } from "react";

export const DesignCategoriesContext = createContext<DesignDataInterface | {}>({});

export const DesignCategoriesProvider = ({ children }: { children: ReactNode }) => {
    const [designCategorieData, setDesignCategorieData] = useState<DesignDataContextInterface>({});

    const handleDesignDataChange = (designCategorieData: DesignDataContextInterface) => {
        setDesignCategorieData(designCategorieData);
    };

    return (
        <DesignCategoriesContext.Provider
            value={{ designCategorieData, handleDesignDataChange }}
        >
            {children}
        </DesignCategoriesContext.Provider>
    );
};