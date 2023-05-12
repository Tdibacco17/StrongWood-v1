import { ProductInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import { ReactNode, createContext, useState } from "react";

export const ProductDetailContext = createContext<ProductsDataContextInterface | {}>({});

export const ProductDetailProvider = ({ children, }: { children: ReactNode; }) => {
    const [productData, setProductData] = useState<ProductInterface | undefined>(undefined);

    const handleProductDataChange = (productData: ProductInterface) => {
        setProductData(productData);
    };

    return (
        <ProductDetailContext.Provider
            value={{ productData, handleProductDataChange }}
        >
            {children}
        </ProductDetailContext.Provider>
    );
};