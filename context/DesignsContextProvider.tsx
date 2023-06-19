import { DesignDataContextInterface, DesignDataInterface } from "@/types/Interfaces"
import { ReactNode, createContext, useState } from "react";

export const DesignsContext = createContext<DesignDataInterface | {}>({});

export const DesignsProvider = ({ children }: { children: ReactNode }) => {
    const [designsData, setDesignsData] = useState<DesignDataContextInterface>({});

    const handleDesignDataChange = (designsData: DesignDataContextInterface) => {
        setDesignsData(designsData);
    };

    return (
        <DesignsContext.Provider
            value={{ designsData, handleDesignDataChange }}
        >
            {children}
        </DesignsContext.Provider>
    );
};