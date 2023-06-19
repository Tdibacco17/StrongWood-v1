import ProductDetailComponent from "@/components/ProductDetailComponent/ProductDetailComponent";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function ProductDetailContainer() {
    const router = useRouter();

    const { handleProductDataChange } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    useEffect(() => {
        if (router.query.slug) {
            const fetchData = async () => {
                if (handleProductDataChange) {
                    const rawData = await fetch(
                        `/api/products/getProductBySlug?slug=${router.query.slug}`
                    );
                    const parsedData = await rawData.json();
                    if (parsedData.error) {
                        return;
                    }

                    handleProductDataChange &&
                        handleProductDataChange(parsedData.data);
                }
            };
            fetchData();
        }
    }, [router.query]);

    return <ProductDetailComponent />
}