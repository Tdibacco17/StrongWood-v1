import ContactContainer from "@/containers/ContactContainer/ContactContainer";
import { ProductDetailProvider } from "@/context/ProductDetailProvider";
import LayoutComponent from "@/layout/LayoutComponent";
import { useRouter } from "next/router";

export default function ContactProductPage() {
    const router = useRouter();
    const { slug, Pago } = router.query

    return (
        <LayoutComponent isSlider={false} urlBack={`products/${slug}`}>
            <ProductDetailProvider>
                <ContactContainer slug={slug as string} pago={Pago as string} />
            </ProductDetailProvider>
        </LayoutComponent>
    )
}