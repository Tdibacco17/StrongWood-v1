import { productsData } from "@/models/products"
import { useRouter } from "next/router";

import { ProductInterface } from "@/types/Interfaces";

export default function ProductDetail() {

    const router = useRouter()
    const { slug } = router.query

    const product: ProductInterface = productsData[slug as string];


    console.log(product)
    return (
        <div>
            {product ? product.title : "no existe"}
        </div>
    );
};