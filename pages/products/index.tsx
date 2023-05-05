import ProductComponent from "@/components/ProductComponent/ProductComponent";
import LayoutComponent from "@/layout/LayoutComponent";

export default function ProductsPage() {
    return (
        <LayoutComponent isHomePage={false}>
            <ProductComponent />
        </LayoutComponent>
    )
}