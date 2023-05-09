import ProductsComponent from "@/components/ProductsComponent/ProductsComponent";
import LayoutComponent from "@/layout/LayoutComponent";

export default function ProductsPage() {
    return (
        <LayoutComponent isSlider={false}>
            <ProductsComponent />
        </LayoutComponent>
    )
}