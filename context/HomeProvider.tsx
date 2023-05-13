import { HomeDataInterface, HomeDataContextInterface } from "@/types/Interfaces";
import { ReactNode, createContext, useState } from "react";

export const HomeContext = createContext<HomeDataContextInterface | {}>({});

export const HomeProvider = ({ children, }: { children: ReactNode; }) => {
    const [homeData, setHomeData] = useState<HomeDataInterface | undefined>(undefined);

    const handleHomeDataChange = (homeData: HomeDataInterface) => {
        setHomeData(homeData);
    };

    return (
        <HomeContext.Provider
            value={{ homeData, handleHomeDataChange }}
        >
            {children}
        </HomeContext.Provider>
    );
};