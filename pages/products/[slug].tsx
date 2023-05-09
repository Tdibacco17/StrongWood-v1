import { productsData } from "@/models/products"
import { useRouter } from "next/router";

import { ProductInterface } from "@/types/Interfaces";
import LayoutComponent from "@/layout/LayoutComponent";
import DetailProductComponent from "@/components/DetailProductComponent/DetailProductComponent";

export default function ProductDetail() {

    const router = useRouter()
    const { slug } = router.query

    const product: ProductInterface = productsData[slug as string];


    console.log(product)
    return (
        <LayoutComponent isSlider={false}>
            <DetailProductComponent product={product} />
        </LayoutComponent>
    );
};