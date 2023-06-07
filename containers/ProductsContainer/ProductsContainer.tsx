import ProductsComponent from "@/components/ProductsComponent/ProductsComponent";
import { useContext, useEffect } from "react";
import { ProductsDataContextInterface } from "@/types/Interfaces"
import { ProductsContext } from "@/context/ProductsContextProvider";

export default function ProductsContainer() {
    const { handleProductDataChange } = useContext(
        ProductsContext
    ) as ProductsDataContextInterface

    useEffect(() => {
        const fetchData = async () => {
            if (handleProductDataChange) {
                const rawData = await fetch("/api/products/getAllProducts");
                const parsedData = await rawData.json();
                if (parsedData.error) {
                    return;
                }

                handleProductDataChange &&
                    handleProductDataChange(parsedData.data);
            }
        };

        fetchData();
    }, []);

    return <ProductsComponent />
}