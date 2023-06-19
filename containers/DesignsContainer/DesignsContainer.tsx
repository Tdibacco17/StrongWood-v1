import DesignsComponent from "@/components/DesignsComponent/DesignsComponent";
import { DesignsContext } from "@/context/DesignsContextProvider";
import { DesignDataContextInterface } from "@/types/Interfaces";
import { useContext, useEffect } from "react";

export default function DesignsContainer() {
    const { handleDesignDataChange } = useContext(
        DesignsContext
    ) as DesignDataContextInterface

    useEffect(() => {
        const fetchData = async () => {
            if (handleDesignDataChange) {
                const rawData = await fetch("/api/design/getAllDesignCategories");
                const parsedData = await rawData.json();
                if (parsedData.error) {
                    return;
                }

                handleDesignDataChange &&
                    handleDesignDataChange(parsedData.data);
            }
        };

        fetchData();
    }, []);

    return <DesignsComponent />
}