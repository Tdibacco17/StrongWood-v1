import DesignComponent from "@/components/DesignComponent/DesignComponent";
import { DesignCategoriesContext } from "@/context/DesignCategoriesContextProvider";
import { DesignDataContextInterface } from "@/types/Interfaces";
import { useContext, useEffect } from "react";

export default function DesignContainer() {
    const { handleDesignDataChange } = useContext(
        DesignCategoriesContext
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

    return <DesignComponent />
}