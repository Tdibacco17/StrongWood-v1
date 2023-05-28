import DetailsProductComponent from "@/components/DetailsProductComponent/DetailsProductComponent";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function DetailsProductContainer() {
    const router = useRouter();

    const { handleProductDataChange } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    useEffect(() => {
        if (router.query.slug) {
            (async () => {
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
            })();
        }
        return () => { };
    }, [router.query]);

    return <DetailsProductComponent />
}