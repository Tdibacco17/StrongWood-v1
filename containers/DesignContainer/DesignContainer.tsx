import DesignComponent from "@/components/DesignComponent/DesignComponent";
import { DesignDataContextInterface } from "@/types/Interfaces";
import { useContext, useEffect } from "react";
import { DesignCategorieContext } from "@/context/DesignCategorieContext";


export default function DesignContainer(){
    const { handleDesignDataChange } = useContext(
        DesignCategorieContext
    ) as DesignDataContextInterface

    useEffect(() => {
        const fetchData = async () => {
            if (handleDesignDataChange) {
                const rawData = await fetch("/api/products/getAllProducts");
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