import HomeComponent from "@/components/HomeComponent/HomeComponent";
import { HomeContext } from "@/context/HomeProvider";
import { HomeDataContextInterface } from "@/types/Interfaces";
import { useContext, useEffect } from "react";

export default function HomeContainer() {
    const { handleHomeDataChange } = useContext(
        HomeContext
    ) as HomeDataContextInterface;

    useEffect(() => {
        (async () => {

            if (handleHomeDataChange) {
                const rawData = await fetch(
                    `/api/home/getInfoHome`
                );
                const parsedData = await rawData.json();
                if (parsedData.error) {
                    return;
                }

                handleHomeDataChange &&
                    handleHomeDataChange(parsedData.data);
            }
        })();

        return () => { };
    }, []);
    return <HomeComponent />
}