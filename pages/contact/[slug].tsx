import ContactContainer from "@/containers/ContactContainer/ContactContainer";
import { ProductDetailProvider } from "@/context/ProductDetailProvider";
import LayoutComponent from "@/layout/LayoutComponent";
import { useRouter } from "next/router";

export default function ContactProductPage() {
    const router = useRouter();
    const { slug, pay } = router.query

    return (
        <LayoutComponent isSlider={false} urlBack={`products/${slug}`}>
            <ProductDetailProvider>
                <ContactContainer slug={slug as string} pay={pay as string} />
            </ProductDetailProvider>
        </LayoutComponent>
    )
}