import ContactContainer from "@/containers/ContactContainer/ContactContainer";
import LayoutComponent from "@/layout/LayoutComponent";
import { useRouter } from "next/router";

export default function ContactProductPage() {
    const router = useRouter();
    const { slug, Pago } = router.query

    return (
        <LayoutComponent isSlider={false} urlBack={`products/${slug}`}>
            <ContactContainer slug={slug as string} pago={Pago as string} />
        </LayoutComponent>
    )
}