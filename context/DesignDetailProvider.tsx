import { DesignInterface, DesignDataContextInterface } from "@/types/Interfaces";
import { ReactNode, createContext, useState } from "react";

export const DesignDetailContext = createContext<DesignDataContextInterface | {}>({});

export const DesignDetailProvider = ({ children, }: { children: ReactNode; }) => {
    const [designData, setDesignData] = useState<DesignInterface | undefined>(undefined);

    const handleDesignDataChange = (designData: DesignInterface) => {
        setDesignData(designData);
    };

    return (
        <DesignDetailContext.Provider
            value={{ designData, handleDesignDataChange }}
        >
            {children}
        </DesignDetailContext.Provider>
    );
};