import ProductsContainer from "@/containers/ProductsContainer/ProductsContainer";
import LayoutComponent from "@/layout/LayoutComponent";

export default function ProductsPage() {
    return (
        <LayoutComponent isSlider={false}>
            <ProductsContainer />
        </LayoutComponent>
    )
}